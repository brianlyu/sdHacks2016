var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

/* global variable for passing data through routes */
var search = "";

/* tell express to look at the static page in public dir */
app.use(express.static('public'));

/* view engine for ejs template engine */
app.set("view engine", "ejs");


app.get('/', (req, res) => {
  res.render("pages/home", {buttonValueSearch: true,
                              buttonValueCreate: true,
                            }); // started from the views dir
});

app.post('/createListButton', (req,res) => {
  console.log(req.body);
  if(req.body.search && req.body.findPlayList !== ''){
    search = req.body.findPlayList; // getting the door code
    res.redirect('/confirmation');
  } else if(req.body.create && req.body.finPlayList !== ''){
    search = req.body.findPlayList; // playList Title
    res.redirect('/playList');
  } else {
    res.redirect('back');
    
  }
});

app.get('/confirmation', (req,res)=> {
  console.log(search);
  res.render("pages/confirmation", {doorCode: search}); // passing in an doorCode variable to confirmation.ejs
});

app.get('/playList', (req,res)=> {
  
  res.render("pages/playList", {title: search}); // passing in title variable to playList.ejs
});


app.listen(PORT, process.env.IP, ()=>{
  console.log("Listening to Port 3000...");

});
