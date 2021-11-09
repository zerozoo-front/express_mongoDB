const express = require("express");
const app = express();
const route = require("./router.js");
const PORT = 3009;
const db = require("./db.js");

const log = console.log;
// log("db check : ", db);
// db
db();

// set
app.set("view engine", "ejs");
app.set("views", "./views");
// set

// use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", route);
app.use((req, res, next) => {
  // 404 처리 부분
  res.status(404).send("일치하는 주소가 없습니다!");
});
app.use((err, req, res, next) => {
  // 에러 처리 부분
  console.error(err.stack); // 에러 메시지 표시
  res.status(500).send("서버 에러!"); // 500 상태 표시 후 에러 메시지 전송
});
// use

// router

// run server
app.listen(PORT, function (err) {
  if (err) console.log("error in server setup");
  console.log("Server listening on Port", PORT);
});
