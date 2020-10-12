var express = require('express');
var todocontroller = require('./controllers/todocontroller');

var app = express();

// set up template engine

app.set('view engine', 'ejs');

app.use(express.static('./public'));

todocontroller(app);

app.listen(3000);

console.log('Server Up');