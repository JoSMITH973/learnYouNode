const http = require('http')
const urlToProvide = process.argv[2];

http.get(urlToProvide, function(response) {
    var result = "";
    response.setEncoding("utf8");
    response.on("data", function(data) {
      result += data;
    });
    response.on("end", function() {
      console.log(result.length);
      console.log(result);
    });
});
