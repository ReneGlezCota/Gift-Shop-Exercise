

module.exports = function(app)
{
    app.get('/', function (req, res) {
        res.render('index.html');
    });

    //APIs
    app.post('/api/credentials', function(req, res){
        require('../api/user').getCredentials(req, res);
    });
}