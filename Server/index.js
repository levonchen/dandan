
var http = require('http');
var net = require('net');
var util = require('util');
var path = require('path');
var fs = require('fs');
//var redis	= require('redis');

//var client = redis.createClient('6379','redis');

//var redisRootKey = "Docket:Test:ViewedCount";

function a(){
	console.log('a');
}

var visitCount = 0;
var rootFolder = "/lf_data/";
if(path.sep == "\\"){
	rootFolder = "D:\\"
}

var fileLogPath = path.join(rootFolder,"lf_log.txt");

var server = new http.Server();
server.on('request',(req,res) =>{
	console.log(req.url);
	
	// client.incr(redisRootKey,function(err,counter){
		// res.writeHead(200,{'Content-Type':'text/html'});
	
		// if(err){
			// res.write('Error happened when call redis server <br/>');
		// }else{
			// res.write('hello, This page has been viewed ' + counter + ' times ! <br/>');
		// }
		// res.end("End")
	// });
	
	visitCount++;
	
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write('hello, This page has been viewed ' + visitCount + ' times ! <br/>');		
	res.end("End")
	
	fs.appendFile(fileLogPath,"\r\n A:" + visitCount,function(err){
		console.error(err);
	})
	
});

server.on('connection',()=>{
	a();
});

server.on('close',()=>{
	console.log('server will close');
})

var port = 8085;

server.listen(port);

console.log("Server started on port :" + port);