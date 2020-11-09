const fs = require('fs');

file = fs.readFile(process.argv[2], 'utf-8', (err,data) => {
    if (err) throw err;
    line = data.match(/\n/gm).length;
    console.log(line);
});
