var express = require("express");

var app = express();

var ejs = require("ejs");


var router = express.Router();
router = require("./instamozoTest")(app);


app.set('views',__dirname + '/views');

app.set('view engine', 'ejs');

app.engine('html', ejs.renderFile);


var server = app.listen(1337, function (err) {

    if (err)

        console.log("Error in Server");


    console.log("Server listening to port" + server.address().port)
});

