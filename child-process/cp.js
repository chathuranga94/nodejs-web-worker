const cp = require("child_process")

// const p1 = cp.fork("fib.js")
// const p2 = cp.fork("fib.js")



const child = cp.spawn('pwd'); // --> Instance of ChildProcess instance implementing EventEmitter API

child.on('exit', (code, signal) => {
    console.log(`child process exited with code ${code} and signal ${signal}`);
    // signal variable is null when the child process exits normally.
    // ChildProcess instances are disconnect, error, close, and message.
});

const child = cp.spawn('ls', ['-a', '-l']); // --> command and then arguments
// message event allows for the caller/parent to communicate with the child process.
// This event is emitted when child process uses process.send().



// const { spawn } = require('child_process');
// const ls = spawn('ls', ['-lh', '/usr']);

// ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });

// ls.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });