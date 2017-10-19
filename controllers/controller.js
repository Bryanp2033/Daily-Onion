var express = require('express');
var router = express.Router();

var cheerio = require("cheerio");
var request = require("request");

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/newspaper', {
    useMongoClient: true
});
mongoose.Promise = Promise;

var db = mongoose.connection;

db.on("error", function(error){
    console.log(error)
})

var Post = require('../models/articles.js');

//Home Page
router.get("/", function(req, res){

    Post.find({}, function(err, data){

        if(err) throw err

        var hbsObject = {
            articles: data
        };

        res.render("index", hbsObject )
    });

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

        const $ = cheerio.load(html);

        $(".inner").each(function(i, element){

            var result = {};

            result.title = $(this).find("h2").text().trim();
             
            const baseLink = "http://www.clickhole.com";

            var halflink = $(this).find("h2")
                                 .find("a")
                                 .attr("href");

            result.link = baseLink + halflink;

            result.date = $(this).find("div.meta").find("span").text().trim();

            // TODO make sure to only delete article:save = false
            Post.remove({}, function(err){
                if(err){
                    console.log("YOU GOT AN ERROR" + err)
                }
            });

            var article = new Post(result);

            article.save(function(err, data){
                
                if(err){
                    console.log("YOU GOT AN ERROR: " + err)
                }
                
                else{
                    // console.log(data);
                }
            });
        });
    });

    Post.count({}, function(err, data){
        console.log(data);
    });

    res.redirect("/");
})

module.exports = router;