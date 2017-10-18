var express = require('express');
var router = express.Router();

var cheerio = require("cheerio");
var request = require("request");



var Post = require('../models/articles.js');

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

router.get("/scrape", function(req, res){

    request("http://www.clickhole.com/features/news/", function(err, response, html){
        
        if(err) throw err;

        var $ = cheerio.load(html);

        results = []

        $(".inner").each(function(i, element){

            var title = $(element).find("h2").text().trim();

            // TODO            add http://www.clickhole.com before 'href'
            var link = $(element).find("h2").find("a").attr("href")


            results.push({
                "title": title,
                "link": link
            });
        })
        console.log(results);
    });
        res.redirect("/");
})

module.exports = router;