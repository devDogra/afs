const express = require('express');
const { createServer } = require('node:http');
const { Server } = require('socket.io');
const path = require('path'); 

const app = express();
const board = Array(9).fill(null); 

app.use('/', express.static(path.join(__dirname, '..')))

const server = createServer(app);
const io = new Server(server);


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html')); 
})

io.on('connection', (socket) => {

  socket.on("playerMoved", data => {
    board[data.sqIdx] = data.move; 
    io.emit("serverRecievedMove", data) 
  })

  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});