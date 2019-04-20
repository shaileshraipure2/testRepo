var fs = require('fs');
//var t = require('./app2');
////var server = require('./server');
////server.startServer;

////console.log(t.deleteFile());

//if (process.argv[2] === 'add')
//    console.log('aa');

//else
//    console.log('bb');


//console.log(process.argv);

//const dataBuff = fs.readFileSync('test.json');
//const JsonString = dataBuff.toString();
//console.log(JsonString);
//const JsonParse = JSON.parse(JsonString);
//console.log(JsonParse.age);

//JsonParse.name = "test";
//JsonParse.age = 23;
//const JsonStringte = JSON.stringify(JsonParse);

//fs.writeFileSync('test.json', JsonStringte);




const yargs = require('yargs');
const note = require('./Notes.js')


yargs.command({
    command: 'remove',
    describtion: 'to remove note from file',
    builder: {
        title: {
            description: 'note title',
            demandOption: true,
            type:'string'
        }

    },
    handler: function (yargs) {
        note.removeNote(yargs.title);
    }


});

yargs.command({
    command: 'add',
    describtion: 'Add note to notes',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'

        },
        body: {
            desribe: 'note body',
            demandOption: true,
            type:'string'
        }
    },
    handler: function (yargs)
    {
        note.addNotes(yargs.title, yargs.body);
    }

});



yargs.parse();

