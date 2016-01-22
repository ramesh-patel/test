/**
 * Created with JetBrains WebStorm.
 * User: Ramesh Patel
 * Date: 20/01/16
 */
// links
//https://www.instamojo.com/developers/rest/
//https://www.instamojo.com/developers/request-a-payment-api/


var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var querystring = require('querystring');
var request = require('request');

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
        res.setHeader('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, ajax');
        res.setHeader('access-control-allow-methods', 'POST,HEAD,GET,PUT,DELETE,OPTIONS');
        res.setHeader('access-control-allow-origin', '*');
        res.removeHeader("X-Powered-By");
        next();
    });

    app.use(bodyParser.urlencoded({

        extended: true
    }));
    app.get('/', function (req, res) {
        res.render('test.html');
    });


    // Debug check authentication
    /*  app.get('/send', function (req, response, next) {
     var options = {
     url: "https://www.instamojo.com/api/1.1/debug/",
     headers: {
     "X-Api-Key": '30b9511f5b66d5c2dffba61cf7c6646e',
     "X-Auth-Token": '6d296b726c8e7400ba11c4fd2d85797a',
     }
     }
     //            response.send(200, data);
     request.get(options, function (req, res, next) {
     console.log(next);
     });

     });*/

    // payment post
    app.get('/send', function (req, res) {
      //  var amount = req.body.amount;
       // var purpose = req.body.purpose;
        var a ;

        //console.log(amount,purpose);
        var options = {
            url: "https://www.instamojo.com/api/1.1/payment-requests/",
            "X-Api-Key": '30b9511f5b66d5c2dffba61cf7c6646e',
            "X-Auth-Token": '6d296b726c8e7400ba11c4fd2d85797a'

            contentType: 'application/json',
                "amount": 300,
                "purpose": "ghsdiufhy"

        }


    });


}
app.listen(3000);

