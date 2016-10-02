var express = require('express');
var app = express();

var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var firebase = require('firebase');

/*
firebase.initializeApp({
  serviceAccount: "Unisound-6498de9ad53e.json",
  databaseURL: "https://unisound-f7ed2.firebaseio.com/"
});

var db = firebase.database();
var ref = db.ref("/roomKeys");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});
*/

var createPlayList = "";

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
  if(req.body.search && req.body.roomKey !== ''){
    res.redirect('/confirmation');
  } else if(req.body.create && req.body.roomKey !== ''){
    createPlayList = req.body.roomKey; // this is the value of the door code
    res.redirect('/playList');
  } else {
    res.redirect('back');
    
  }
});

app.get('/confirmation', (req,res)=> {
  res.render("pages/confirmation");
});

app.get('/playList', (req,res)=> {
  res.render("pages/playList", {search: search});
});


var server = app.listen(3000, ()=>{
  var host = server.address().address
  var port = server.address().port
  
  console.log("Listening at http://%s:%s", host, port);
});
