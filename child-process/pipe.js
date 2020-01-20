// // Destructure spawn from child_process
// const { spawn } = require('child_process');
// // Get the child from spawn with echo 
// const child = spawn('wc');
// // Pipe the input on the parent stdin to the child stdin
// process.stdin.pipe(child.stdin);

// // Listen to events from the stdout on the child
// child.stdout.on('data', () => {
//     console.log(`stdout:\n${data}`);
// });

const { spawn } = require('child_process')

const find = spawn('find', ['.', '-type', 'f']);
const wc = spawn('wc', ['-l']);

find.stdout.pipe(wc.stdin);

for await (const data of wc.stdout) {
  console.log(`number of files: ${data}`);
};