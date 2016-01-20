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


module.exports = function(app) {
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
    app.get('/',function(req,res){
        res.render('test.html');
    });


    app.post('/send',function(req,res){
        var amount = req.body.amount;
        var purpose = req.body.purpose;

        //console.log(amount,purpose);
        var options = {
            url : "https://www.instamojo.com/api/1.1/payment-requests",
            headers : {
                "X-Api-Key" : '30b9511f5b66d5c2dffba61cf7c6646e',
                "X-Auth-Token" : '6d296b726c8e7400ba11c4fd2d85797a',
                //  "X-Salt" : 'b9916f2a994c9a762f1c22b575aac423',

            },
            //method : "POST",
            contentType : "application/json",
            data : {
                "amount" : amount,
                "purpose" : purpose
            }
        }

        request.post(options,function(err,res,b){
            //console.log(res);
            // console.log(JSON.parse(body));
            console.log("-------------",b);
              //console.log(res);

        });

    });



    app.get('/payments', function (req, response, next) {
        var data = {
            url: "https://www.instamojo.com/api/1.1/payment-requests",
            "X-Api-Key": '30b9511f5b66d5c2dffba61cf7c6646e',
            "X-Auth-Token": '6d296b726c8e7400ba11c4fd2d85797a',

        }

        response.send(200, data);

    });


   /* app.post('/payment-requests', function (req, res, next) {
        res.send(req.body);
    });
*/

}
app.listen(3000);


/*




"amount": '2500',
    "purpose": 'freecharge'




*/




















































/*


var reqeust =require('request');



*/


//debug **working
/*var options = {
    uri : "https://www.instamojo.com/api/1.1/debug/",
    headers : {
        "X-Api-Key" : '30b9511f5b66d5c2dffba61cf7c6646e',
        "X-Auth-Token" : '6d296b726c8e7400ba11c4fd2d85797a'
    }
}

reqeust.get(options,function(err,res,body){
    console.log(res.statusCode);
    console.log(body);

    //  MIXPANEL_TOKEN = '3b50c4ddad918be0bb151763430d4992';

})*/



//Get payment detail   **working
 /*var options = {
 uri : "https://www.instamojo.com/api/1.1/payments/",
 headers : {
 "X-Api-Key" : '30b9511f5b66d5c2dffba61cf7c6646e',
 "X-Auth-Token" : '6d296b726c8e7400ba11c4fd2d85797a'
 }
 }

 reqeust.get(options,function(err,res,body){
 console.log(res.statusCode);
 console.log(body);

 })*/


//post order     **not workingb9916f2a994c9a762f1c22b575aac423
/*var options = {
    url : "https://www.instamojo.com/api/1.1/payment-requests",
    headers : {
        "X-Api-Key" : '30b9511f5b66d5c2dffba61cf7c6646e',
        "X-Auth-Token" : '6d296b726c8e7400ba11c4fd2d85797a',
      //  "X-Salt" : 'b9916f2a994c9a762f1c22b575aac423',

    },
    //method : "POST",
    contentType : "application/json",
    data : {
        "amount" : '2500',
        "purpose" : 'freecharge'
    }
}*/

/*
reqeust.post(options,function(err,res,b){
    console.log(res);
   // console.log(JSON.parse(body));
    console.log(b);
  //  console.log(res);

});
*/


/*
var options = {
    uri : "https://www.instamojo.com/api/1.1/payment-requests/?payment_request_id=MOJO6116005C76971789/",
    headers : {
        "X-Api-Key" : '30b9511f5b66d5c2dffba61cf7c6646e',
        "X-Auth-Token" : '6d296b726c8e7400ba11c4fd2d85797a'
    }
}

reqeust.get(options,function(err,res,body){
    console.log(res.statusCode);
    console.log(body);


})*/

//0aa444797597403b93707355866c6ec5





//link all token
/*
var options = {
    url : "https://www.instamojo.com/api/1.1/links/",
    headers : {
        api_key : '30b9511f5b66d5c2dffba61cf7c6646e',
        auth_token : '6d296b726c8e7400ba11c4fd2d85797a'
    }
}

reqeust.get(options,function(err,res,body){
   // console.log(err);
    console.log(res.statusCode);
   //console.log(body);

})

*/
