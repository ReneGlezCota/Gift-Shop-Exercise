module.exports = function(sequelize, DataTypes) {
    var categories = sequelize.define('category', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoincrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'categories',
        createdAt: false,
        updatedAt: false
    });

    return categories;
};
