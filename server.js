var express = require('express');
var path = require('path');
var app = express();
var staticPath = express.static(path.join(__dirname, '/dist'));

//项目基本设置
const project = require('./config/project.config.json');

app.use(staticPath);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
    res.end();
});

app.listen(project.proPort,project.proPort, function (error) {
    if (error) {
        console.error(error)
    } else {
        console.info('===>listen at %s <===', project.proPort)
    }
})