const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class BranchesDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const branches = await db.branches.create(
      {
        id: data.id || undefined,

        name: data.name || null,
        address: data.address || null,
        phone_number: data.phone_number || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await branches.setBranch(data.branch || null, {
      transaction,
    });

    return branches;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const branchesData = data.map((item, index) => ({
      id: item.id || undefined,

      name: item.name || null,
      address: item.address || null,
      phone_number: item.phone_number || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const branches = await db.branches.bulkCreate(branchesData, {
      transaction,
    });

    // For each item created, replace relation files

    return branches;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;
    const globalAccess = currentUser.app_role?.globalAccess;

    const branches = await db.branches.findByPk(id, {}, { transaction });

    await branches.update(
      {
        name: data.name || null,
        address: data.address || null,
        phone_number: data.phone_number || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await branches.setBranch(data.branch || null, {
      transaction,
    });

    return branches;
  }

  static async deleteByIds(ids, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const branches = await db.branches.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
      transaction,
    });

    await db.sequelize.transaction(async (transaction) => {
      for (const record of branches) {
        await record.update({ deletedBy: currentUser.id }, { transaction });
      }
      for (const record of branches) {
        await record.destroy({ transaction });
      }
    });

    return branches;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const branches = await db.branches.findByPk(id, options);

    await branches.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await branches.destroy({
      transaction,
    });

    return branches;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const branches = await db.branches.findOne({ where }, { transaction });

    if (!branches) {
      return branches;
    }

    const output = branches.get({ plain: true });

    output.metrics_branch = await branches.getMetrics_branch({
      transaction,
    });

    output.branch = await branches.getBranch({
      transaction,
    });

    return output;
  }

  static async findAll(filter, globalAccess, options) {
    const limit = filter.limit || 0;
    let offset = 0;
    let where = {};
    const currentPage = +filter.page;

    const user = (options && options.currentUser) || null;
    const userBranch = (user && user.branch?.id) || null;

    if (userBranch) {
      if (options?.currentUser?.branchId) {
        where.branchId = options.currentUser.branchId;
      }
    }

    offset = currentPage * limit;

    const orderBy = null;

    const transaction = (options && options.transaction) || undefined;

    let include = [
      {
        model: db.branch,
        as: 'branch',
      },
    ];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: Utils.uuid(filter.id),
        };
      }

      if (filter.name) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('branches', 'name', filter.name),
        };
      }

      if (filter.address) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('branches', 'address', filter.address),
        };
      }

      if (filter.phone_number) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'branches',
            'phone_number',
            filter.phone_number,
          ),
        };
      }

      if (filter.active !== undefined) {
        where = {
          ...where,
          active: filter.active === true || filter.active === 'true',
        };
      }

      if (filter.branch) {
        const listItems = filter.branch.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          branchId: { [Op.or]: listItems },
        };
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.lte]: end,
            },
          };
        }
      }
    }

    if (globalAccess) {
      delete where.organizationId;
    }

    const queryOptions = {
      where: globalAccess ? {} : where,
      include,
      distinct: true,
      order:
        filter.field && filter.sort
          ? [[filter.field, filter.sort]]
          : [['createdAt', 'desc']],
      transaction: options?.transaction,
      logging: console.log,
    };

    if (!options?.countOnly) {
      queryOptions.limit = limit ? Number(limit) : undefined;
      queryOptions.offset = offset ? Number(offset) : undefined;
    }

    try {
      const { rows, count } = await db.branches.findAndCountAll(queryOptions);

      return {
        rows: options?.countOnly ? [] : rows,
        count: count,
      };
    } catch (error) {
      console.error('Error executing query:', error);
      throw error;
    }
  }

  static async findAllAutocomplete(
    query,
    limit,
    offset,
    globalAccess,
    organizationId,
  ) {
    let where = {};

    if (!globalAccess && organizationId) {
      where.organizationId = organizationId;
    }

    if (query) {
      where = {
        [Op.or]: [
          { ['id']: Utils.uuid(query) },
          Utils.ilike('branches', 'name', query),
        ],
      };
    }

    const records = await db.branches.findAll({
      attributes: ['id', 'name'],
      where,
      limit: limit ? Number(limit) : undefined,
      offset: offset ? Number(offset) : undefined,
      orderBy: [['name', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.name,
    }));
  }
};
