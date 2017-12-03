urls = {
    // urlSQLSERVER : {
    //     database : 'Gift_Shop',
    //     user : 'sa',
    //     password : 'developer123',
    //     host : 'localhost',
    //     port : '1433',
    //     dialect : 'mssql'
    // }
    urlPostgress : 'postgres://postgres:developer123@localhost:5432/Gift_Shop'

}

urls.url = urls.urlPostgress;

module.exports = urls;