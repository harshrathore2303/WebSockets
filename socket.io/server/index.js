import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";

const port = 3000;

const app = express();
// start by creating server
const server = createServer(app);

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
//creating a instance of server
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});


// it is used as middleware
io.use((socket, next) => {
  next();
});

// io = entire circuit
io.on("connection", (socket) => {
  console.log("User Joined");
  console.log("Id:", socket.id);
  //   socket.emit("welcome", `Welcome to the server ${socket.id}`);
  //   socket.broadcast.emit("welcome", `${socket.id} joined the server`);

  socket.on("message", ({ message, room }) => {
    console.log("message from frontend: ", message);
    // both are same this and below ->socket.to(room).emit("receive-message", message);
    io.to(room).emit("receive-message", message);
  });

  socket.on("join-room", (room) => {
    socket.join(room);
    console.log(`User joined room ${room}`);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
  });
});

/*
 * after doing above step who will notice that "User connected" and "Id" will print 2 times after reloading. Its because of <StrictMode/> in react
 * io.on send message to all sockets
 */

//uses the same instance as createServer uses therefore there is no point in using this app.listen after create server with http and using with io.
// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

server.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
