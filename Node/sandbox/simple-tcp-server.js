const net = require('net');

const server = net.createServer({}, tcpSocket => {
	console.log('connection from client');
	tcpSocket.write("I am a TCP server\n");

	setTimeout(() => {
		tcpSocket.end('Good bye!\n\n');
	}, 1000);
});

server.listen(9000, "localhost", 2);

server.on("listening", () => {
	console.log("server accepting connection \n");
});
