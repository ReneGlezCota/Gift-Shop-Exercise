urls = {
    // urlPostgress : {
    //     database : 'Gift_Shop',
    //     user : 'postgres',
    //     password : 'developer123',
    //     host : 'localhost',
    //     port : '5432',
    //     dialect : 'postgres'
    // }
    urlPostgress : 'postgres://postgres:developer123@localhost:5432/Gift_Shop'

}

urls.url = urls.urlPostgress;

module.exports = urls;