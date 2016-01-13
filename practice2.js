



/*
 Created by Ramesh Patel
 */

var request = require('request');
var http = require('http');

//var assert = require('assert');


var connect = {
    url : 'https://sendgrid.com/login',
    //method : 'POST',
    //host: 'https://sendgrid.com/',
    // path: 'https://sendgrid.com/marketing_campaigns/lists/46123',
    // method: 'POST',
    // headers: { "api_key" : "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" },
    api_user : 'marketingmailer',
    api_key : 'barton$123',
    // Username : 'marketingmailer',
    //password : 'barton$123',
    form : {
        name : "ramesh",
        type : "text"

    }}


request.post(connect, function(error, response, body){

    if(error) {
        console.log(error);
    } else {
        //console.log(response.statusCode, body);

        //console.log(response);


        var contact = {
            url : 'https://sendgrid.com/login',
            //method : 'POST',
            //host: 'https://sendgrid.com/',
            // path: 'https://sendgrid.com/marketing_campaigns/lists/46123',
            // method: 'POST',
            // headers: { "api_key" : "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" },
            //api_user : 'marketingmailer',
            //api_key : 'barton$123',
            // Username : 'marketingmailer',
            //password : 'barton$123',
            form : {
                name : "ramesh",
                type : "text"

            }}


        request.post(contact, function(error, response, body){

            if(error) {
                console.log(error);
            } else {
                //console.log(response.statusCode, body);

                //console.log(response);

                console.log(contact.form);


                console.log("Request sent!");
            }
        });







        console.log("Request sent!");
    }
});


