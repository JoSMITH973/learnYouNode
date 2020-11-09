const fs = require('fs');
const {extname} = require('path');
const source = process.argv[2];
const extension = '.'+process.argv[3];

const mymodule=require('./mymodule.js')
mymodule(source, extension, (err, file) => {
    console.log(file);
})