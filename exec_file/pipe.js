/*
var cp = require('child_process');
const child = cp.spawn('wc');
process.stdin.pipe(child.stdin);

child.stdout.on('data', (data) => {
    console.log(`\nstdout:\n${data}`);
});


var ls = cp.spawn('ls', ['-a', '/home']);
ls.stdout.pipe(process.stdout);
// ls.stdin.write('test');
// ls.stdin.end();



var cp = require('child_process');

var command = 'echo';
var args = ['hello', 'world'];

var childProcess = cp.spawnSync(command, args, {
    cwd: process.cwd(),
    env: process.env,
    stdio: [process.stdin, process.stdout, process.stderr], // 'inherit'
    encoding: 'utf-8'
});
*/


/*
const { execFile } = require('child_process');
const child = execFile('node', ['--version'],
    (error, stdout, stderr) => {
        if (error) throw error;
        console.log(stdout);
    });

const child2 = execFile('node', ['--version']);
child2.stdout.on('data', (data) => { console.log(data); });
*/


/*
const { spawn } = require('child_process');

const child = spawn('wc');

process.stdin.pipe(child.stdin)

child.stdout.on('data', (data) => {
    console.log(`child stdout:\n${data}`);
});
*/

/*
const { spawn } = require('child_process');

const find = spawn('find', ['.', '-type', 'f']);
const wc = spawn('wc', ['-l']);

find.stdout.pipe(process.stdout)
find.stdout.pipe(wc.stdin);

wc.stdout.on('data', (data) => {
    console.log(`Number of files ${data}`);
});
*/


/*
const fs = require('fs')
const { spawn } = require('child_process')
const filename = 'index.js'

fs.watch(filename, () => {
    const ls = spawn('ls', ['-lh', filename])
    ls.stdout.pipe(process.stdout)
})
*/