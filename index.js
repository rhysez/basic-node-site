const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 8080;

const server = http.createServer((req, res) => {
    const requiredUrl = url.parse(req.url).pathname;

    if (requiredUrl == '/') {
        fs.readFile('index.html', function(err, data) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text.html')
            return res.end(data);
        })
    }
    else if (requiredUrl == '/about.html') {
        fs.readFile('about.html', function(err, data) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            return res.end(data)
        })
    }
    else if (requiredUrl == '/contact-me.html') {
        fs.readFile('contact-me.html', function(err, data) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            return res.end(data)
        })
    }
    else {
        fs.readFile('404.html', function(err, data) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            return res.end(data)
        })
    }
})

server.listen(port, () => {
    console.log(`Server is running at ${port}`);
})

