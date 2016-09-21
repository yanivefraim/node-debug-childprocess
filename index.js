const spawn = require('child_process').spawn;
const path = require('path');

const file = path.resolve('./child.js');
const args = ['--inspect=9228', '--debug-brk', file];
const ls = spawn('node', args);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
