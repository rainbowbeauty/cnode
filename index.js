var http = require('http');
var fs  = require('fs');
var path = require('path');
var mime = require('mime');
http.createServer(function(request, response){
	var filePath = '';
	if(request.url == '/'){
		filePath = 'index.html';
	}else{
	    filePath = request.url;
	}
	var absPath = './' + filePath;
	fs.readFile(absPath,function(err,data){
		response.writeHead(200,{"content-type": mime.lookup(path.basename(filePath))});
		response.end(data);
	});
}).listen(8888, function() {
 	console.log("Server listening on port 8888.");
});
