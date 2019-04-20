const fs = require('fs');

var addNotes = function (title, body)
{
    var note = loadNotes();

    var noteObj = {
        'title': title,
        'body': body
    };

    note.push(noteObj);

    var jsonString = JSON.stringify(note);

    fs.writeFileSync('test.json', jsonString);
}

var loadNotes = function ()
{

    try {
        var buffer = fs.readFileSync('test.json');
        var stringBuffer = buffer.toString();
        return JSON.parse(stringBuffer);

    } catch (e) {
        return [];
    }

}

var removeNote = function (title) {

    console.log('this tile is removed'+ title);
}

module.exports = { addNotes: addNotes, removeNote: removeNote };