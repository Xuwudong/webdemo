const child_process= require('child_process');
const child = child_process.execFile('node',['test.js'], (error, stdout, stderr) => {
    if (error) {
        throw error;
    }
    console.log(stdout);
});