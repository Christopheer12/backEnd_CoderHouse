const express = require("express");
const { Server: HttpServer } = require("http");
const { Server: SocketServer } = require("socket.io");
const formmatMessage = require("./utils/utils");
const PORT = process.env.PORT || 8080;
const app = express();

const httpServer = new HttpServer(app);
const io = new SocketServer(httpServer);

const messages = [];
const users = [];

//middlewares
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.get("/chat", (req, res) => {
  console.log(users);
  res.sendFile(__dirname + "/public/chat.html");
});

app.post("/login", (req, res) => {
  const { username } = req.body;
  if (users.find((user) => user.username === username)) {
    return res.send("username already taken");
  }
  res.redirect(`/chat?username=${username}`);
});

//Listen

httpServer.listen(PORT, () => {
  console.log("Server on in port", PORT);
});

const botName = "Shut bot";

//Socket Events
io.on("connection", (socket) => {
  console.log("new client connection");
  socket.emit("messages", [...messages]);

  socket.on("join-chat", (data) => {
    const newUser = {
      id: socket.id,
      username: data.username,
    };

    socket.emit("chat-message", formmatMessage(null,botName,`welcome to shut app`));
    users.push(newUser);
  });
});
