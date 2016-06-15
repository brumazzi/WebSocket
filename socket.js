var socket = null;

function websocket_test(){
	return "WebSocket" in window ? true : false;
}

function socket_connect(){
	if(!websocket_test())
		return false;

	socket = new WebSocket('ws://localhost:8080/'/*'ws://echo.websocket.org'*/);
	socket.onopen = function(event){
		console.log('connected!');
	};
	socket.onerror = function(error){
		console.log(''+error);
	};
	socket.onclose = function(){
		console.log('Connection closed!');
		socket = null;
	}
	socket.onmessage = function(msg){
		console.log(msg.data);
		socket.send("receive");
	}
}

function socket_close(){
	if(socket)
		socket.close();
}
