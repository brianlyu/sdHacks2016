var express = require('express');
var app = express();

app.get('/', (reg, res) => {
  res.send("Music App!");
});


app.listen(3000, ()=>{
  console.log("Listening to Port 3000...");
});
