// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Using static public folder to include css
app.use(express.static(__dirname + '/app/public'));

//ROUTER
require("./app/routing/apiRoutes.js")(app); 
require("./app/routing/htmlRoutes.js")(app);


// Starts the server to begin listening
app.listen(PORT, function () {
  console.log('App listening on PORT: http://localhost:' + PORT);
});