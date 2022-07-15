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
    fetch(MenuURL, {
      method: "GET",
    })
      .then((res) => res.arrayBuffer())
      .then((blob) => {
        socket.emit("resMenu", blob);
      });

    // const readAsText = (blob, encoding = null) =>
    //   new Promise((resolve) => {
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //       resolve(reader.result);
    //     };
    //     reader.readAsText(blob, encoding);
    //   });

    // const response = await fetch(MenuURL);
    // const blob = await response.blob();
    // const html = await readAsText(blob, "shift-jis");

    // const request = new XMLHttpRequest();
    // request.open("GET", MenuURL, true);
    // request.onload = function () {
    //   this.response.console.log(this.responseText);
    // };
    // request.send();
  });
});

http.listen(8080, () => {
  console.log("Example app listening on port 8080!");
});
