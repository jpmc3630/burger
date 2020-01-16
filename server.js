var express = require("express");
var exphbs  = require('express-handlebars');

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

require("./controllers/burgers_controller.js")(app);

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});

// console.log(burgers.ORM);