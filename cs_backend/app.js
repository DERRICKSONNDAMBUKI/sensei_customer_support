const express = require("express");
const cors = require("cors");
const { createServer } = require("http");
const { Server } = require("socket.io");

require("dotenv").config();

app = express();

// middlewares
app.use(express.json());
app.use(cors());

// ROUTES
app.get("/", async (req, res) => {
  try {
    res.send("Hello RU nav sys");
    console.log("getting home");
  } catch (error) {
    console.error(error);
  }
});

// socket.io
const httpServer = createServer(app);
const io = new Server(httpServer, {
  pingInterval: 30000,
});

io.use((socket,next)=>{
    let handshake = socket.handshake
})

io.of("/admin").on("connection", (socket) => {
    let handshake = socket.handshake
    console.log(handshake.time);
  console.log(socket.rooms);

  socket.conn.on("packet", ({ type, data }) => {
    // called for each packet received
  });

  socket.conn.on("close", (reason) => {
    // called when the underlying connection is closed
  });
});

// server listening
const server = httpServer.listen(process.env.PORT || 5000, "0.0.0.0", () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`server is listening at http://${host}:${port}`);
});
