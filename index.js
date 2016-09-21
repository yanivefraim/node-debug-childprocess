const spawn = require('child_process').spawn;
const path = require('path');

const ls = spawn('node', [path.resolve('./child.js')], {execArgv: '--debug-brk=4545'});

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
