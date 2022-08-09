const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', function(req, res){
  // console.log(req);
  res.send("Hello world");
});

app.get("/contact", function(req, res){
  res.send("Hello there, Im contact");
});

app.get("/about", function(req, res) {
  res.send("<h1>Hi, I'm Warsay</h1><br><p>I'm a web developer</p>");
});

app.get("/hobbies", function(req, res){
  res.send("<ul><li>coffee</li><li>bear</li><li>games</li></ul>")
});

app.listen(port, function(){
  console.log("server started listening at port " + port);
});
