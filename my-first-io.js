const fs = require('fs');

file = fs.readFileSync(process.argv[2], 'utf-8');
line = file.match(/\n/gm).length;
console.log(line);
