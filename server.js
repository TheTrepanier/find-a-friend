const express = require("express");
const path = require("path");


const app = express();
const PORT = process.env.PORT || 8080;

// Set up Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(PORT, function () {
    console.log("Listening on Port: ", PORT);
    
});