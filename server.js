var express = require('express');
var app = express();

var bodyParser = require('body-parser');

<<<<<<< HEAD
var PORT = process.env.PORT || 3000;
=======
>>>>>>> 92ec70e6eeb0d4b3437f221f44252a971a6ddca2

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

var queue = [];

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
<<<<<<< HEAD
  if(req.body.search && req.body.findPlayList !== ''){
    search = req.body.findPlayList; // getting the door code
    res.redirect('/confirmation');
  } else if(req.body.create && req.body.finPlayList !== ''){
    search = req.body.findPlayList; // playList Title
=======
  if(req.body.search && req.body.roomKey !== ''){
    res.redirect('/confirmation');
  } else if(req.body.enter && req.body.roomKey === '0000'){
    createPlayList = req.body.roomKey; // this is the value of the door code
>>>>>>> 92ec70e6eeb0d4b3437f221f44252a971a6ddca2
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

/*
pushSong(songMetadata) {
    
}
*/


<<<<<<< HEAD
app.listen(PORT, process.env.IP, ()=>{
  console.log("Listening to Port 3000...");

=======
var server = app.listen(3000, ()=>{
  var host = server.address().address
  var port = server.address().port
  
  console.log("Listening at http://%s:%s", host, port);
>>>>>>> 92ec70e6eeb0d4b3437f221f44252a971a6ddca2
});
