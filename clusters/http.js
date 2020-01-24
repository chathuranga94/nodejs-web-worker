const http = require('http');
const url = require('url');
const port = 3000;

const add = (a, b) => a + b;
const fib = (n) => n > 2 ? fib(n - 1) + fib(n - 2) : 1;

http.createServer((req, res) => {
    console.log(`Server recieve request for ${req.url}`);

    const req_url = url.parse(req.url, true);
    if (req_url.pathname == '/fibonacci')
        res.end(`process ${process.pid} value: ${fib(45)}`);
    else if (req_url.pathname == '/add')
        res.end(`process ${process.pid} value: ${add(10, 20)}`);
    else
        res.end('value: 0');

}).listen(port, (err) => {
    if (err) return console.log(`Server error on ${err}`);
    console.log(`Server started on ${port}`);
});