const http = require('http')
const urlToProvide = process.argv[2];

http.get(urlToProvide, (response) => {
  response.on('data', (data) => {
    console.log(data.toString()+'\r');
  })
});
