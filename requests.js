const fs = require('fs');
var createFile = function () {
    fs.writeFileSync('./example.txt', 'Hi I am writing to file', (err) => {
        if (err)
            console.log(err);
        else
            console.log('File has been created');

        console.log('In Progress !!!')
    });

    console.log('done !!!')
};

var readFile = function () {

    fs.readFile('./example.txt', 'utf-8', (err,data) => {

        if (err)
            console.log(err);
        else
            console.log(data);
    });
};

var deleteFile = function () {
    fs.unlink('./example.txt', (err) => {
        if (err)
            console.log(err);
        else
        console.log('File has been deleted');
    });
};

module.exports = { createFile: createFile, readFile: readFile, deleteFile: deleteFile }