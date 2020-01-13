const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

console.log(`${isMainThread ? '[Main' : '[Worker'} Thread] running node.js script...`);

if (isMainThread) {
    console.log('[Main Thread] Starting...');
    function parseJSAsync(script) {
      return new Promise((resolve, reject) => {
        const worker = new Worker(__filename, {
          workerData: script
        });
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
          if (code !== 0)
            reject(new Error(`Worker stopped with exit code ${code}`));
        });
      });
    };

    async function run() {
      for (var i = 1; i <= 10; i++) {
        (async (index) => {
            setTimeout(async () => {
              const result = await parseJSAsync(index.toString())
              console.log(`[Main Thread] For ${index} SHA256: ${result}`);
            }, i * 100);
        })(i);
      }
    }
    
    run().catch(err => console.error(err))

} else {

  console.log('[Worker Thread] Starting...');
  const crypto = require('crypto');
  const pwd = workerData;
  console.log('[Worker Thread] Calculating Hash');
  const hash = crypto.createHash('sha256').update(pwd).digest('base64');
  (async (hashValue) => {
    setTimeout(async () => {
      parentPort.postMessage(hashValue); // Mock some delay for CPU intensive task
    }, 100);
  })(hash);
}