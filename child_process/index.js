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

/*
const { exec } = require('child_process');
const child = fork('lsss');

child.stderr.on('data', (data) => {
  console.log(`stdout: ${data}`);
});
*/



const { spawn } = require('child_process');
const child = spawn('ls');
const childProcess = spawn('pwd', [], { stdio: [process.stdin, process.stdout, process.stderr] });
