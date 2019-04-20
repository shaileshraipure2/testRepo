var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var Joi = require('joi');
var http = require('http');
var request = require('request');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())



//app.get('/', (req, res) => {

//    res.send('hello..');
//});

app.get('/', function (req, res) {
    var option = {
        host: 'http://demo.stratemis.com',
        port:80,
        path: '/administrator/apifortalentrackr/',
        ContentType: 'application/json',
        Method: 'POST',
        data: JSON.stringify({ "Tenant Name": "1086", "First Name": "Sumit", "Last Name": "Sonawane", "Mobile": "9730860857", "Email": "sumit.s@talentrackr.com", "candidate_id_in_ats": "777", "position": "Lead Software Developer", "business/unit": "Talentrackr", "Department": " " }),
    };

    request(option, function (res) {
        console.log(res)
        res.on('data', function (d) {

            console.log(d);
        })

    }).end();


});



app.post('/test',(req, res) => {

    console.log(req.body);

    const schema = Joi.object().keys({
        email: Joi.string().trim().min(10).email().required()
    });

    Joi.validate(req.body, schema, (err, result) => {

        if (err) {
            console.log(err.message);
            res.send(err.message);
        }
        else {
            console.log(result);
            console.log('ji');
            res.send('posted successfully');
        }
    })
    //next();
});



app.use('/test/:name/:age', (req, res, next) => {
    console.log('hi starting');
    //res.send('hello test param..');
    next();
});

app.get('/test/:name/:age', (req, res, next) => {
    console.log(req.params);
    try {
        next(new Error("BROKEN"));
    }
    catch (err) {
        next(err);
    }
    // res.send('hello test param..');
    //next();
});

//app.all('/test/:name/:age', (req, res, next) => {
//    console.log('helllo');
//    res.send('hello test all param..');
//    //next();
//});



app.listen(3000);
