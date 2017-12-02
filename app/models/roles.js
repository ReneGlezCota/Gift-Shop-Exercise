var Sequelize = require('sequelize'),
    configDB = require('../config/database.js');

var sequelize = new Sequelize(configDB.url);

module.exports = function(sequelize, DataTypes) {
    var roles = sequelize.define('Roles', {
        RoleID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        RoleName: {
            type: DataTypes.CHAR,
            allowNull: false
        },
    }, {
        schema: 'Gift_Shop',
        tableName: 'Roles',
        createdAt: false,
        updatedAt: false
    });

    roles.sync({
        schema: 'Amarok',
        force: false
    }).catch(function(err) {
        console.log('failed at syncing roles table');
        console.log(err);
    });
    return roles;
};
