import app from './app';
import { Server as WebSocketServer } from 'socket.io';
import http from 'http';
import { connectDB } from './db';
import sockets from './sockets';
import { PORT } from './config';

connectDB()
const server = http.createServer(app)
const httpServer = server.listen(PORT)
const io = new WebSocketServer(httpServer)
sockets(io)
console.log("server running on port", PORT);