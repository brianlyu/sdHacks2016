var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

/* global variable for passing data through routes */
var search = "";

/* tell express to look at the static page in public dir */
app.use(express.static('public'));

/* view engine for ejs template engine */
app.set("view engine", "ejs");


app.get('/', (req, res) => {
  res.render("pages/home", {"value": ""}); // started from the views dir
});

app.post('/createListButton', (req,res) => {
  console.log(req.body);
  if(req.body.findPlayList === ''){
    res.redirect('/createList');
  } else {
    search = req.body.findPlayList;
    res.redirect('/findList');
  }
});

app.get('/createList', (req,res)=> {
  res.render("pages/createList");
});

app.get('/findList', (req,res)=> {
  res.render("pages/findList", {search: search});
});


app.listen(3000, ()=>{
  console.log("Listening to Port 3000...");

});
