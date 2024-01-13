import http from "http"; // nodeJS에 자체적으로 갖고 있음.
import { WebSocketServer } from "ws";
import express from "express";

const app = express();

app.set('view engine', "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on http://localhost:4000`);

// requestListener가 필요함. http 서버를 만들고 access 할 수 있음.
const server = http.createServer(app);

// WebSocketServer에게 매개변수를 주지 않아도 상관없음.
// 해당 방식으로 구현하면 같은 서버에서 http와 websocket 둘 다 작동. (같은 port 사용)
// views, static files, home, redirection을 원해서 http를 사용함.
const wss = new WebSocketServer({server}); 

server.listen(4000, handleListen);