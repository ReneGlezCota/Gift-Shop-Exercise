

module.exports = function(app)
{
    app.get('/', function (req, res) {
        res.render('index.html');
    });

    //APIs
    app.post('/api/credentials', function(req, res){
        require('../api/user').getCredentials(req, res);
    });

    app.get('/api/allproducts', function(req, res){
        require('../api/product').getAllProducts(req,res);
    });

    app.get('/api/allcategories', function(req, res){
        require('../api/category').getAllCategory(req,res);
    });
}