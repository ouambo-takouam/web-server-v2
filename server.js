const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
	res.writeHead(200);
	res.end('Heloooo');
});

server.listen(8000, () => {
	console.log('Listening to port 8000');
});
