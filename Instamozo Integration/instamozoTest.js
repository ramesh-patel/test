/**
 * Created with JetBrains WebStorm.
 * User: Ramesh Patel
 * Date: 20/01/16
 */

var reqeust =require('request');

//debug
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

/*

//Get payment detail
var options = {
    uri : "https://www.instamojo.com/api/1.1/payments/",
    headers : {
        "X-Api-Key" : '30b9511f5b66d5c2dffba61cf7c6646e',
        "X-Auth-Token" : '6d296b726c8e7400ba11c4fd2d85797a'
    }
}

reqeust.get(options,function(err,res,body){
    console.log(res.statusCode);
    console.log(body);


})

*/


//Get details off perticular payment_id
var options = {
    url : "https://www.instamojo.com/api/1.1/payments/MOJO6119005J24344121",
    headers : {
        "X-Api-Key" : '30b9511f5b66d5c2dffba61cf7c6646e',
        "X-Auth-Token" : '6d296b726c8e7400ba11c4fd2d85797a'
    }
}

reqeust.get(options,function(err,res,body){
    console.log(res.statusCode);
  //  console.log(JSON.parse(body));
    console.log(body);


})









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
