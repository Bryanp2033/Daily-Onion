const express = require('express');
const bodyParser = require('body-parser');
const exphbrs = require('express-handlebars');

// Setup App
var app = express();
var PORT = process.env.PORT || 8000;

// Use Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbrs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/controller.js");

app.use('/', routes);

app.listen(PORT, function(){
    console.log("listening on localhost:" + PORT);
})