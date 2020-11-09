const fs = require('fs');
const { extname, basename } = require('path');
const path = process.argv[2];
const extension = process.argv[3];

if((path !== undefined) && ( extension!== undefined)) {
    readPath = fs.readdir(path, (err,data) => {

        let tableau = []
        data.forEach(file => {
            fileExt = extname(file);
            if(fileExt == '.'+extension){
                tableau.push(file);
                console.log(file);
            }
        });
    });
}
else {
    console.log('There is no directory or file');
}