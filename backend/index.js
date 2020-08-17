
var app = require('./app');
var hostname = '127.0.0.1';
var port = 3000;

app.listen(port, hostname, () => {
    console.log('Server running at http://'+hostname+':'+port);
});


