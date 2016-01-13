/**
 * Created by atishay-jain on 13/1/16.
 */
/*
 Created by Ramesh Patel

 Sendgrid Contact updatation

 */

var request = require('request');
var http = require('http');


var connect = {
    url : 'https://sendgrid.com/marketing_campaigns/contacts',
    path :'https://api.sendgrid.com/v3/contactdb/custom_fields/{custom_field_id}',
    //method : 'POST',
    //host: 'https://sendgrid.com/',
    // path: 'https://sendgrid.com/marketing_campaigns/lists/46123',
    // method: 'POST',
    // headers: { "api_key" : "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" },
    api_user : 'marketingmailer',
    api_key : 'barton$123',
    // Username : 'marketingmailer',
    //password : 'barton$123',
    /*   form : {
     name : "ramesh",
     type : "text"

     }}   */
    form :
        [
            {
                "email": "jack@example.com",
                "last_name": "Jones",
                "pet": "Indiana",
                "age": 25
            },
            {
                "email": "mind@example.com",
                "last_name": "Miller",
                "pet": "FrouFrou",
                "age": 32
            },
            {
                "email": "valid_email",
                "last_name": "Smith",
                "pet": "Spot",
                "age": 17
            }
        ]

}

/*
 request.post(connect, function(error, response, body){

 if(error) {
 console.log(error);
 } else {
 //console.log(response.statusCode, body);

 //console.log(response);


 var contact = {
 url : 'https://api.sendgrid.com/v3/contactdb/lists/46123/recipients/am9uZXNzc3NzQGV4YW1wbGUuY29t HTTP/1.1',

 form :
 [
 {
 "email": "jack@example.com",
 "last_name": "Jones",
 "pet": "Indiana",
 "age": 25
 },
 {
 "email": "mind@example.com",
 "last_name": "Miller",
 "pet": "FrouFrou",
 "age": 32
 },
 {
 "email": "valid_email",
 "last_name": "Smith",
 "pet": "Spot",
 "age": 17
 }
 ]

 }}

 */
request.post(connect, function(error, response, body){

    if(error) {
        console.log(error);
    } else {
        //console.log(response.statusCode, body);

        console.log(response);

        //  console.log(contact.form);



        console.log("Request sent!");
    }
});







console.log("Request sent!");





