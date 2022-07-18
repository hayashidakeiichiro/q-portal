const { response } = require("express");
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use("/img", express.static(__dirname + "/app/dist/img/"));
app.use("/css", express.static(__dirname + "/app/dist/css/"));
app.use("/js", express.static(__dirname + "/app/dist/js/"));
app.use("/favicon", express.static(__dirname + "/app/dist/favicon.ico"));
app.get("/", (req, res) => res.sendFile(__dirname + "/app/dist/index.html"));

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const FileReader = require("filereader");
io.on("connection", function (socket) {
  socket.on("reqMenu", async () => {
    const MenuURL = `http://www.coop.kyushu-u.ac.jp/shokudou/month_menu.html`;
    const setMealURL = `http://www.coop.kyushu-u.ac.jp/teishoku220711.html`;
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
});

http.listen(8080, () => {
  console.log("Example app listening on port 8080!");
});
