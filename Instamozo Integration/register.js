/**
 * Created by Ramesh-patel on 21/1/16.
 */
/*

 var request = require('request');

 var options = {
 url : 'https://www.instamojo.com/api/1.1/debug/',
 headers : {
 'X-Api-Key' : '30b9511f5b66d5c2dffba61cf7c6646e',
 'X-Auth-Token': '6d296b726c8e7400ba11c4fd2d85797a',
 'contentType' : 'application/json',
 },

 data : {
 'amount' : "87890",
 'purpose' : "onliuner"
 }

 };

 request.get(options,function(e,r,b){
 console.log(b) ;
 });

 var options1 = {
 url : 'https://www.instamojo.com/api/1.1/payment-requests/',
 headers : {
 'X-Api-Key' : '30b9511f5b66d5c2dffba61cf7c6646e',
 'X-Auth-Token': '6d296b726c8e7400ba11c4fd2d85797a',
 'contentType' : 'application/json',
 },

 form : {
 'amount' : "87890",
 'purpose' : "onliuner"
 }

 };

 request.post(options1,function(e,r,b){
 console.log("sdsads",b) ;
 });*/

function paynow() {
    console.log('=hrere=======');
    var xhr = new XMLHttpRequest();

    xhr.open('POST', '',true);
    xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://www.instamojo.com/api/1.1/payment-requests/');
    xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET,POST');
    xhr.setRequestHeader('Content-type', 'application/json');


    /*xhr.setRequestHeader("Access-Control-Allow-Headers", "X-Api-Key 30b9511f5b66d5c2dffba61cf7c6646e", "X-Auth-TOKEN 6d296b726c8e7400ba11c4fd2d85797a, Access-Control-Allow-Origin, Authorization, Origin, x-requested-with, Content-Type, Content-Range, Content-Disposition, Content-Description") */
  //  xhr.setRequestHeader('X-Api-Key', '30b9511f5b66d5c2dffba61cf7c6646e');
   // xhr.setRequestHeader('X-Auth-TOKEN', '6d296b726c8e7400ba11c4fd2d85797a');

    xhr.send({
        'headers': {
            'X-Api-Key': '30b9511f5b66d5c2dffba61cf7c6646e',
            'X-Auth-TOKEN': '6d296b726c8e7400ba11c4fd2d85797a',
        },
        'data': {
            'amount': '340',
            'purpose': 'shopping',
            redirectUrl : "https://www.instamojo.com/api/1.1/payment-requests/",
        },
    });
    xhr.onload = function (body) {
        if (this.status === 200) {
            console.log('=success=======', body);
            console.log(this.readyState);
            console.log(this.response);

            // r.redirectUrl(r);

        } else {
            console.log('=failed=======');
        }
    };


};

