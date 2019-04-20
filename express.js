//var express = require('express');
//var app = express();
//var path = require('path');
//console.log(__dirname);
//var path1 = path.join(__dirname, 'views');
//app.use(express.static(path1));

//app.get('', (req, res) => {
//    res.render('index', {title:'my title'});
//});


//app.set('view engine', 'hbs');
//app.get('/help', (req, res) => {

//    res.send('Help Page !!!');
//});

//app.listen(3000, () => {

//    console.log('Server is up!!');
//})

var express = require('express');
var path = require('path');
var hbs = require('hbs');
var app = express();

var folderPath = path.join(__dirname, 'views')
var viewPath = path.join(__dirname, 'Other');
var partialPath = path.join(__dirname, 'Partial');
app.use(express.static(folderPath));

app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialPath);


app.get('', (req, res) => {
    res.render('Index2', {title:'My title 2'})
})
app.get('/index2', (re, res) => {
    res.render('Index2', { title: 'my titl',footer:'my foooteerrrrrr' });
})
app.listen(3000, () => {

    console.log('server is up!!');
})
