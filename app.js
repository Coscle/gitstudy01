const http = require('http');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end('<h1>Hello world!</h1>')
});

app.get('/', (req, res) => {
    res.end('<h1>Hello world2!</h1>')
});

app.get('/', (req, res) => {
    res.end('<h1>git??</h1>')
});

app.get('/', (req, res) => {
    res.end('<h1>git?? reverse </h1>')
});

// local에서 수정 했음22222222
app.get('/', (req, res) => {
    res.end('<h1>git?? reverse </h1>')
});

const server = http.createServer(app);
server.listen(3000, ()=> {
    console.log('Run on server http://localhost:3000');
});git
