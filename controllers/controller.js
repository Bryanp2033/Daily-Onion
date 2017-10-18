var express = require('express');
var router = express.Router();

var cheerio = require("cheerio");
var request = require("request");

//Home Page
router.get("/", function(req, res){
    res.render("index", {layout: 'main'})
    console.log("Working Home Page");
});

//Saved Page
router.get("/saved", function(req, res){
    res.render("saved", {layout: 'main'});
    console.log("Working Search Page")
});

module.exports = router;