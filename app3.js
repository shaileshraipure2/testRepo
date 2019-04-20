var app2 = require('./app2.js');

//const url = 'https://reqs.in/api/usrs';
//request({ url:url, json:true }, (Error, resposnse,body) => {

//    if (Error) {
//        console.log('unable to connect')
//        return;
//    }
//   // console.log(resposnse.body.data[0]);
//    var x = body.data[0];
//    var obj = JSON.stringify(x);
//    var d = JSON.parse(obj);
//    console.log(d.id);
//});

var yargs = require('yargs');

yargs.command ({
    command: 'add',
    description: 'id of',
    builder: {
        id: {
            desciption: 'idt od fff',
            type: 'string',
            demandOption: true
        }
    },
    handler: function (yargs) {
        console.log('1');
        app2.apiCall(yargs.id, (data) => {
            console.log(data.body);
        });
    }
});

yargs.parse();
//var id = process.argv[2];

//if (!id)
//    console.log('provide id')
//else {
//    console.log(id);
    
//}

console.log('end')
