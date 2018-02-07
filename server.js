const fs = require('fs');

const express = require('express');
const app = express();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());

app.get('/', function (req, res) {
    res.send("server is running");
});

app.get('/initial', function (req, res) {
    let data = '';
    let readStream = fs.createReadStream('./src/assets/docs/default.md', 'utf8');

    readStream.on('data', function(chunk) {  
        data += chunk;
    }).on('end', function() {
        res.send(data);
    });
});

app.post('/download', function (req, res) {
    // console.log(req.body.input);
    let writeStream = fs.createWriteStream('document.md');

    writeStream.write(req.body.input);
    writeStream.end();

    res.setHeader('Content-type', "application/octet-stream");

    res.setHeader('Content-disposition', 'attachment; filename=document.md');

    res.pipe(writeStream);
        
    // res.send("download is successful");

});

const server = app.listen(9000, function () {
    console.log("markdown pad server listening at port 9000");
});