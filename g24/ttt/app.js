const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use('/', express.static(__dirname)); 

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

const board = Array(9).fill(null); 
let XTurn = true; 
io.on('connection', (socket) => {

  socket.on("playerMoved", data => {
    const {sqIdx} = data; 

    const move = XTurn ? "X" : "O";
    board[sqIdx] = move;
    XTurn = !XTurn;  
    data.move = move
    io.emit("serverRecdMove", data);
  })

  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});