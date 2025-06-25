 const http = require('http');
 const fs = require('fs');

 const server = http.createServer((req, res) => {
     fs.readFile('tinfo.txt', 'utf-8', (err, data) => {
         if (err) {
             res.writeHead(500, { 'Content-Type': 'text/plain' });
             res.end('Error reading the file.');
         } else {
             res.writeHead(200, { 'Content-Type': 'text/plain' });
             res.end(data);
         }
     });
 });

 server.listen(5000, () => {
     console.log('Application running on http://localhost:5000/');
 });
