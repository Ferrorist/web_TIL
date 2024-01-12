import express, { application } from "express";

const app = express();

// pug setting
app.set('view engine', "pug");
app.set("views", __dirname + "/views");

app.use("/public", express.static(__dirname + "/public"));

// set router
app.get("/", (req, res) => res.render("home"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);
app.listen(3000, handleListen); // use port number : 3000