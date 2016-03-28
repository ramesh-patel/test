



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
    // headers: { "api_key" : "" },
    api_user : '',
    api_key : '',
    // Username : '',
    //password : '',
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
            // headers: { "api_key" : "" },
            //api_user : '',
            //api_key : '',
            // Username : '',
            //password : '',
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


