const cp = require("child_process")

const p1 = cp.fork("fib.js")
const p2 = cp.fork("fib.js")
