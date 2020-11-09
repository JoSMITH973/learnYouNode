const fs = require('fs');
// const {extname} = require('path');
const path = require('path');

module.exports = function (source, extension, callback) {
    fs.readdir(source, function(error,file) {
        if(error) {
           return callback(error);
        }

        callback(null, file.extension(function(entry) {
                return path.extname(entry) === extension;
        }))
   })
}


/*
 fs.readdir(source, (err,data) => {
        if(err) {
            return callback(err)
        }        
        let tableau = []
        data.forEach(file => {
            fileExt = extname(file);
            if(fileExt == extension){
                tableau.push(file);
                callback(null, file);
            }
        });
    });
*/