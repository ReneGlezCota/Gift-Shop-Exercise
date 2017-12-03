module.exports = function(sequelize, DataTypes) {
    var roles = sequelize.define('role', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoincrement: true            
        },
        role: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'roles',
        createdAt: false,
        updatedAt: false
    });
    return roles;
};
