const os = require("os");

//current user info
const user = os.userInfo();
console.log(user);
//system uptime

console.log(`The system uptime is ${os.uptime()} secs`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totelMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
