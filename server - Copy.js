var http = require('http');
var fs = require('fs');
var startServer = http.createServer((req, res) => {

    console.log('server has been started');
    var readStream = fs.createReadStream('./test.html');
    //res.writeHead(
    readStream.pipe(res);
    //res.write('hi server');
   // res.end();
}).listen(3000);

module.exports = { startServer: startServer };