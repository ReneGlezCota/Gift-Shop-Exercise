var Sequelize = require('sequelize'),
configDB = require('../config/database.js');

var sequelize = new Sequelize(configDB.url);

module.exports = function(sequelize, DataTypes) {
    var roles = require('./roles')(sequelize, DataTypes);

    var users = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoincrement: true
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        firstname: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        roleid: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'users',
        createdAt: false,
        updatedAt: false
    });
    
    users.belongsTo(roles, { foreignKey: 'id'});

    return users;
};
