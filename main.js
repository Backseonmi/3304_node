// const http = require('http');
// // const fs = require('fs');
// const url = require('url');

// const app = http.createServer(function(req, res) {
//   let _url = req.url;   // 문자열 형태
//   // 문자열 형태의 _url을 object형태로 변환
//   let queryData = url.parse(_url, true).query;
//   res.end(queryData.id);
// });

// app.listen(3333);

/*const express = require('express');

const app = express();

app.get('/', function(Req, res, next){
  res.send('Hello World');
});

app.listen(3333);*/

const express = require('express');

const app = express();

//모든 경로에 요청
app.get('*', function(req, res, next){
  console.log('당장');
  next();
});

//루트(/) 경로에 요청
app.get('/', function(req, res, next){
  console.log('하하 반가워 혜민아 사랑해');
  next();
});

app.listen(3333);