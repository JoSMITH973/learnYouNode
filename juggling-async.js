const http = require('http')

for (let i = 2; i<5;i++) {
    const urlToProvide = process.argv[i];
    http.get(urlToProvide, function(response) {
        var result = "";
        response.setEncoding("utf8");
        response.on("data", function(data) {
        result += data;
        });
    response.on("end", function() {
        // console.log(urlToProvide,' : ',result.length);
        console.log(result);
        });
    });
}