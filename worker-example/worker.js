const { workerData, parentPort } = require('worker_threads')

// You can do any heavy stuff here, in a synchronous way without blocking the "main thread"

async  function  write() {

    console.log('Going to write tons of content on file ' + workerData);
    parentPort.postMessage({ fileName: workerData, status: 'Done' })
}

write()