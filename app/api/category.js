var BaseApi = require('./baseAPI'),
_ = require('lodash');

function Category() {
    Category.super_.apply(this);
}

Category.super_ = BaseApi;

Category.prototype = Object.create(BaseApi.prototype, {
    constructor : {
        value : Category,
        enumerable : false
    }
});

var Sequelize = Category.prototype.Sequelize,
sequelize = Category.prototype.sequelize,
schema = Category.prototype.schema;

module.exports = {
    getAllCategory : function(req, res){
        var categoryModel = require('../models/categories')(sequelize, Sequelize);
        
        categoryModel.findAll({raw: true}).then(function(values){            
            if(values.length != 0){            
                res.send({success: true, data:values});
            }
            else{
                res.send({success: false});
            }
            
        }).catch(function(err){
            console.error(err.stack);
            res.status(500).send('Something broke in the api of category');
        });
    }
};