const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const branches = sequelize.define(
    'branches',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.TEXT,
      },

      address: {
        type: DataTypes.TEXT,
      },

      phone_number: {
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

  branches.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    db.branches.hasMany(db.metrics, {
      as: 'metrics_branch',
      foreignKey: {
        name: 'branchId',
      },
      constraints: false,
    });

    //end loop

    db.branches.belongsTo(db.branch, {
      as: 'branch',
      foreignKey: {
        name: 'branchId',
      },
      constraints: false,
    });

    db.branches.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.branches.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return branches;
};
