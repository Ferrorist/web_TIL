import http from "http"; // nodeJS에 자체적으로 갖고 있음.
// import { WebSocketServer } from "ws";
import SocketIO from "socket.io";
import {instrument} from "@socket.io/admin-ui";
import express from "express";

const app = express();

app.set('view engine', "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on http://localhost:4000`);

// requestListener가 필요함. http 서버를 만들고 access 할 수 있음.
const httpServer = http.createServer(app);
const wsServer = SocketIO(httpServer);

httpServer.listen(4000, handleListen);