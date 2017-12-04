var BaseApi = require('./baseAPI'),
    _ = require('lodash');

function User() {
    User.super_.apply(this);
}

User.super_ = BaseApi;

User.prototype = Object.create(BaseApi.prototype, {
    constructor : {
        value : User,
        enumerable : false
    }
});

var Sequelize = User.prototype.Sequelize,
    sequelize = User.prototype.sequelize,
    schema = User.prototype.schema;

module.exports = {
    getCredentials : function(req, res){
        var userModel = require('../models/user')(sequelize, Sequelize),
            roleModel = require('../models/roles')(sequelize, Sequelize);
        
        var username = req.body.user,
            password = req.body.pw;
        
        userModel.findAll({raw: true, where : { username : username, password : password}, include : [roleModel]}).then(function(values){
            
            if(values.length != 0){
                var parsedData = _.map(values, function(v){
                    return {
                        username : v.username,
                        firstname : v.firstname,
                        lastname : v.lastname,
                        rolename : v['role.role']
                    }
                });
                res.send({success: true, data:parsedData});
            }
            else{
                res.send({success: false});
            }
        }).catch(function(err){            
            console.error(err.stack);
            res.status(500).send('Something broke in the api of user');
        });
    }
};