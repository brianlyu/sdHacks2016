var express = require('express');
var app = express();

/* tell express to look at the static page in public dir */
app.use(express.static('public'));

/* view engine for ejs template engine */
app.set("view engine", "ejs");


app.get('/', (reg, res) => {
  res.render("pages/home"); // started from the views dir
});



app.listen(3000, ()=>{
  console.log("Listening to Port 3000...");
  
});
