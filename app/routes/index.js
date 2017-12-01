

module.exports = function(app)
{
    app.get('/', function(req, res) {
        res.render('index.html');
    });

    app.get('/welcome', function(req, res) {
        res.render('index.html', {
            user: req.user
        });
    });
}