import http from "http"; // nodeJS에 자체적으로 갖고 있음.
// import { WebSocketServer } from "ws";
import SocketIO from "socket.io";
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

// WebSocketServer에게 매개변수를 주지 않아도 상관없음.
// 해당 방식으로 구현하면 같은 서버에서 http와 websocket 둘 다 작동. (같은 port 사용)
// views, static files, home, redirection을 원해서 http를 사용함.
// const wss = new WebSocketServer({server}); 

const wsServer = SocketIO(httpServer);

wsServer.on("connection", socket => {
    socket.on("enter_room", (msg, done) => {
        console.log(msg);
        setTimeout(() => {
            done();
        }, 5000);
    });
});

/*

// 연결된 socket들이 들어갈 list
const sockets = [];


// 누군가와 연결되었을 때 event 발생. callback으로 socket을 받는다.
// socket → 연결된 어떤 사람. 연결된 브라우저와의 contect 라인.
// 이 socket을 어딘가에 저장해야함.
wss.on("connection", (socket) => {
    sockets.push(socket);
    socket["nickname"] = "Anon";
    console.log("Connected to Browser ✔");
    socket.on("close", () => console.log("Disconnected from the Browser 💦"));
    socket.on("message", msg => {
        const message = JSON.parse(msg);
        switch(message.type){
            case "new_message":     
                sockets.forEach((aSocket) => aSocket.send(`${socket.nickname}: ${message.payload}`));
                break;
            case "nickname":
                socket["nickname"] = message.payload;
                break;
        }
    });
});

*/

httpServer.listen(4000, handleListen);