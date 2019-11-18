// Dependencies
var express = require("express");
var path = require("path");
var friends = require("./app/data/friends");

// Express setup
var app = express();
var PORT = process.env.PORT || 3000;

//Static url
app.use(express.static('./app/public'));

//Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//server listening
app.listen(PORT, function () {
    console.log("Listening.");
    //console.log(friends);
});