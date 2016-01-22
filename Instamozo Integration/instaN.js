/**
 * Created by atishay-jain on 21/1/16.
 */
/**
 * Created by hippo on 4/8/15.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var crypto = require("crypto");

/*var querystring = require('querystring');*/


app.use(function (req, res, next) {
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.setHeader('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, ajax');
    res.setHeader('access-control-allow-methods', 'POST,HEAD,GET,PUT,DELETE,OPTIONS');
    res.setHeader('access-control-allow-origin', '*');
    res.removeHeader("X-Powered-By");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded
({
    extended: true
}));

app.get('/instaA',function(req,res) {
    var options = {

            "api_key": '30b9511f5b66d5c2dffba61cf7c6646e',
            "auth_token": '6d296b726c8e7400ba11c4fd2d85797a',
        "amount" : "495",
        "purpose" : "online shopping"



    };
    res.send(options)


});
app.post('/handleResponse', function (req, res)
{
    console.log('===req.body----', req.body);
});
app.listen(1337);
