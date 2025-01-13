const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const branch = sequelize.define(
    'branch',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.TEXT,
      },

      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    },
  );

  branch.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    db.branch.hasMany(db.users, {
      as: 'users_branch',
      foreignKey: {
        name: 'branchId',
      },
      constraints: false,
    });

    db.branch.hasMany(db.activities, {
      as: 'activities_branch',
      foreignKey: {
        name: 'branchId',
      },
      constraints: false,
    });

    db.branch.hasMany(db.branches, {
      as: 'branches_branch',
      foreignKey: {
        name: 'branchId',
      },
      constraints: false,
    });

    db.branch.hasMany(db.contacts, {
      as: 'contacts_branch',
      foreignKey: {
        name: 'branchId',
      },
      constraints: false,
    });

    db.branch.hasMany(db.leads, {
      as: 'leads_branch',
      foreignKey: {
        name: 'branchId',
      },
      constraints: false,
    });

    db.branch.hasMany(db.notes, {
      as: 'notes_branch',
      foreignKey: {
        name: 'branchId',
      },
      constraints: false,
    });

    //end loop

    db.branch.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.branch.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return branch;
};
