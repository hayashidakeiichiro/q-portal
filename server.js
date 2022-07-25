const { response } = require("express");
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const fs = require("fs");

app.use("/img", express.static(__dirname + "/app/dist/img/"));
app.use("/css", express.static(__dirname + "/app/dist/css/"));
app.use("/js", express.static(__dirname + "/app/dist/js/"));
app.use("/favicon", express.static(__dirname + "/app/dist/favicon.ico"));
app.get("/", (req, res) => res.sendFile(__dirname + "/app/dist/index.html"));
app.get("/news", (req, res) => res.sendFile(__dirname + "/app/dist/index.html"));
app.get("/dining", (req, res) => res.sendFile(__dirname + "/app/dist/index.html"));
app.get("/traffic", (req, res) => res.sendFile(__dirname + "/app/dist/index.html"));
app.get("/newsImg", (req, res) => {
  fs.readFile(__dirname + "/public/newsImg/test.jpg", (err, data) => {
    res.type("jpg");
    res.send(data);
  });
});

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const FileReader = require("filereader");
const joinZero = (num) => {
  if (num < 10) {
    return "0" + String(num);
  } else {
    return String(num);
  }
};
io.on("connection", function (socket) {
  socket.on("reqMenu", async () => {
    const today = new Date();
    const MenuURL = `http://www.coop.kyushu-u.ac.jp/shokudou/month_menu.html`;
    const setMealDate =
      String(today.getFullYear()).slice(2) +
      joinZero(today.getMonth() + 1) +
      joinZero(today.getDate() - (today.getDay() - 1));
    const setMealURL = `http://www.coop.kyushu-u.ac.jp/teishoku${setMealDate}.html`;
    fetch(MenuURL, {
      method: "GET",
    })
      .then((res) => res.arrayBuffer())
      .then((blob) => {
        socket.emit("resMenu", blob);
      });
    fetch(setMealURL, {
      method: "GET",
    })
      .then((res) => res.arrayBuffer())
      .then((blob) => {
        socket.emit("resSetMeal", blob);
      });
  });
  socket.on("reqTimeTable", () => {
    const json = require("./json/timetable.json");
    socket.emit("resTimeTable", json);
  });
  socket.on("reqNews", () => {});
});

http.listen(8080, () => {
  console.log("Example app listening on port 8080!");
});
