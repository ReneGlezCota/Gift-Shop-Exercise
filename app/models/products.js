module.exports = function(sequelize, DataTypes) {
    var categories = require('./categories')(sequelize, DataTypes);

    var products = sequelize.define('product', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoincrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },        
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },        
        categoriid: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'products',
        createdAt: false,
        updatedAt: false
    });
    
    products.hasMany(roles, { foreignKey: 'id'});

    return products;
};
