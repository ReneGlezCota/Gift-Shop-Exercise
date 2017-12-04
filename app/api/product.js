var BaseApi = require('./baseAPI'),
_ = require('lodash');

function Product() {
    Product.super_.apply(this);
}

Product.super_ = BaseApi;

Product.prototype = Object.create(BaseApi.prototype, {
    constructor : {
        value : Product,
        enumerable : false
    }
});

var Sequelize = Product.prototype.Sequelize,
sequelize = Product.prototype.sequelize,
schema = Product.prototype.schema;

module.exports = {
    getAllProducts : function(req, res){
        var productModel = require('../models/products')(sequelize, Sequelize),
            categoryModel = require('../models/categories')(sequelize, Sequelize);
        
        productModel.findAll({raw: true, include : [categoryModel]}).then(function(values){
            
            if(values.length != 0){            
                res.send({success: true, data:values});
            }
            else{
                res.send({success: false});
            }
            
        }).catch(function(err){
            console.error(err.stack);
            res.status(500).send('Something broke in the api of products');
        });
    }
};