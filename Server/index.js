
var http = require('http');
var net = require('net');
var util = require('util');
var redis	= require('redis');

var client = redis.createClient('6379','redis');

var redisRootKey = "Docket:Test:ViewedCount";

function a(){
	console.log('a');
}

var server = new http.Server();
server.on('request',(req,res) =>{
	console.log(req.url);
	
	client.incr(redisRootKey,function(err,counter){
		res.writeHead(200,{'Content-Type':'text/html'});
	
		if(err){
			res.write('Error happened when call redis server <br/>');
		}else{
			res.write('hello, This page has been viewed ' + counter + ' times ! <br/>');
		}
		res.end("End")
	});
	
});

server.on('connection',()=>{
	a();
});

server.on('close',()=>{
	console.log('server will close');
})

server.listen(8080);