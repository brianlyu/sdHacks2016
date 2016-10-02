var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db.close();
});

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
    res.redirect('/confirmation');
  } else if(req.body.create && req.body.finPlayList !== ''){
    search = req.body.findPlayList;
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
