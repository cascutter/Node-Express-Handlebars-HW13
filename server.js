// Install dependencies
const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();

// Static content
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars
const exHandle = require("express-handlebars");

app.engine("handlebars", exHandle({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes
const routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Add listener
app.listen(PORT, function() {
    console.log("Server is listening on: http://localhost:" + PORT);
});