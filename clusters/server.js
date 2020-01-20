const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
var url = require('url');

// let workers = [];
const printWorkers = () => console.log(Object.values(cluster.workers).map(worker => worker.process.pid));

let masterProcess = () => {
    console.log(`Master ${process.pid} is running`);

    for (let i = 0; i < numCPUs; i++) {
        console.log(`Forking process number ${i}...`);

        const worker = cluster.fork();
        // workers.push(worker);

        // Listen for messages from worker
        worker.on('message', (message) => {
            console.log(`Master ${process.pid} recevies message '${JSON.stringify(message)}' from worker ${worker.process.pid}`);
        });
    }

    printWorkers();

    // Send message to the workers
    Object.values(cluster.workers).forEach((worker) => { // workers.forEach
        console.log(`Master ${process.pid} sends message to worker ${worker.process.pid}...`);
        worker.send({ msg: `Message from master ${process.pid}` });
    });

    cluster.on('online', (worker) => {
        console.log('Worker ' + worker.process.pid + ' is online');
    });

    cluster.on('exit', function (worker, code, signal) {
        console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
        // console.log(`Workers: ${workers.map(worker => worker.process.pid)}`);
        // console.log(cluster.workers.map(worker => worker.process.pid));
        // workers = workers.filter(w => w.process.pid !== worker.process.pid);
        // console.log(workers.map(worker => worker.process.pid));
        printWorkers();

        console.log('Starting a new worker');
        // workers.push(cluster.fork());
        cluster.fork();
        printWorkers();
        // console.log(cluster.workers.map(worker => worker.process.pid));
    });

    // process.exit();
}

(cluster.isMaster) ? masterProcess() : childProcess();

const add = (a, b) => a + b;
const fib = (n) => n > 2 ? fib(n - 1) + fib(n - 2) : 1;

function childProcess() {
    console.log(`Worker ${process.pid} started...`);

    http.createServer((req, res) => {
        const req_url = url.parse(req.url, true);

        process.send({ msg: `Worker ${process.pid} received request for ${req_url.pathname}` })

        if (req_url.pathname == '/fibonacci') res.end(`process ${process.pid} value: ${fib(req_url.query.n)}`); // --> /fibonacci?n=20
        else if (req_url.pathname == '/add') res.end(`process ${process.pid} value: ${add(10, 20)}`);
        else process.exit(); // response.end('index'); or kill PID --> to kill process

    }).listen(8000);

    // ps aux | grep node
}