import express, { application } from "express";

const app = express();

// pug setting
app.set('view engine', "pug");
app.set("views", __dirname + "/views");

// public 폴더를 유저에게 공개함.
app.use("/public", express.static(__dirname + "/public"));

// set router
app.get("/", (req, res) => res.render("home"));

// catchall url 설정
// 유저가 어떤 url로 이동하던지 홈으로 redirect함.
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);
app.listen(3000, handleListen); // use port number : 3000