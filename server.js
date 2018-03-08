var express = require("express");
var app = express();

app.set('view engine', 'ejs');

var PORT = process.env.PORT || 8080;

app.get('/', function(req,res){
    res.render('pages/index');
});


app.get('/results', function(req,res){
    res.render('pages/results');
});

app.get('/post', function(req,res){
    res.render('pages/post');
});

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });
  

var bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.locals.eat = require('./data/eat.json');


// // Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));



// // Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// // Import routes and give the server access to them.
// var routes = require("./controllers/catsController.js");

// app.use(routes);

