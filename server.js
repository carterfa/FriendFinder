// Dependencies
var express = require("express");
var path = require("path");
var friends = require("./app/data/friends");

// Express setup
var app = express();
var PORT = process.env.PORT || 3000;

//Static url
app.use(express.static('app/public'));

//Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
})

app.get("/api/friends", function (req, res) {
    return res.json(friends);
})

app.post("/api/friends", function (req, res) {

    const newFriend = req.body;
    
    function findFriend(newFriend, friends){
    
        let match = {};
        let currentDifference = 99;
        
        //goes through friend array
        for (let j = 0; j < friends.length; j++) {
            let totalDifference = 0;
            //compares answers
            for (let i = 0; i < friends[j].scores.length; i++) {
                totalDifference += Math.abs(newFriend.scores[i] - friends[j].scores[i])
        
            }
        
            //change match if difference is less than current difference
            if (totalDifference < currentDifference) {
                match = friends[j];
                currentDifference = totalDifference;
                
            }
        }
        
        return match;
        
        }
    //sends data to front end
    res.send(findFriend(newFriend, friends));

})

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
})


//server listening
app.listen(PORT, function () {
    console.log("Listening.");
    //console.log(friends);
});




