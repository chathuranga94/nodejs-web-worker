const cp = require("child_process");

const server_1 = cp.fork("http.js");
const server_2 = cp.fork("http.js");