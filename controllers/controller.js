var express = require('express');
var router = express.Router();

//Home Page
router.get("/", function(request, response){
    response.render("index", {layout: 'main'})
    console.log("Working Home Page");
})

module.exports = router;