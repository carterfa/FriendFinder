// Dependencies
var express = require("express");
var path = require("path");
var friends = require("./app/data/friends");

// Express setup
var app = express();
var PORT = process.env.PORT || 3000;

//Static url
//app.use(express.static(path.join(__dirname, "public")));

//Data parsing
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
app.get("/survey", function(req,res){
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
})

app.get("/api/friends", function(req,res){
    return res.json(friends);
})

app.post("/api/friends", function(req,res){

})

app.get("*", function(req,res){
    res.sendFile(path.join(__dirname, "app/public/home.html"));
})


//server listening
app.listen(PORT, function() {
    console.log("Listening.");
    //console.log(friends);
});