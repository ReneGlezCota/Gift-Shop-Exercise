var Sequelize = require('sequelize'),
    configDB = require('../../config/database');

var sequelize = new Sequelize(configDB.url);

function BaseApi(){

}

BaseApi.prototype.sequelize = sequelize;
BaseApi.prototype.Sequelize = Sequelize;
BaseApi.prototype.schema = 'public';

module.exports = BaseApi;