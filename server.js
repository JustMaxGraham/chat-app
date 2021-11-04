import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

io.on("connection", (socket) => {
  console.log(`New client connected`);
});
