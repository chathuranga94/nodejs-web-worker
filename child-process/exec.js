const cp = require('child_process'); 

// cp.exec('open http://www.google.com'); 

cp.exec('ls', (err, data) => {  // mock error lsee -> (err, data, stderr)
    if (err) { throw err; }  // console.log(stderr); 
    console.log(data); 
}); 

/* 
Exec is for invoking the other processes and capturing their output. This happens in a synchronous way.
To handle the async way, we need to understand the spawn method of the child process.  
*/


// const questionApp = cp.spawn(“node”, [“questions.js”]); 