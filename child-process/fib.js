
const fib = (n) => n > 2 ? fib(n-1) + fib(n-2) : 1;
const n = 40;

var hrstart = process.hrtime()
// for (var i = 1; i < n; i++) console.log(`Fibbonaci ${i} value: ${fib(i)}`);
console.log(fib(n))
hrend = process.hrtime(hrstart)
console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
