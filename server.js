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
<<<<<<< HEAD
  res.render("pages/home"); // started from the views dir
});

app.get('/createlist', function(req,res){
	res.render('pages/createList');
});

=======
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
>>>>>>> 5373ef8a0049ae8c054f55395ceec8abb374e327


app.listen(3000, ()=>{
  console.log("Listening to Port 3000...");

});
