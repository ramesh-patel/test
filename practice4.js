/**
 * Created by atishay-jain on 13/1/16.
 */
/*
 Created by Ramesh Patel

 .......... Sendgrid Contact .............

 */

var request= require('request');

var req = {
    headers:{

        "Authorization": "Bearer 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"

    }

};

/*
 //Retreive  a list recipent
 request.get('https://api.sendgrid.com/v3/contactdb/lists/46123/recipients', req, function(err, res){
 console.log(err, "..................", res.body);
 });
 */



/*
 //Upadate  a list name
 request.patch('https://api.sendgrid.com/v3/contactdb/lists/46123', req, function(err, res){
 console.log(err, "..................", res.body);
 });
 */







/*
 //List Recipients GET
 request.get('https://api.sendgrid.com/v3/contactdb/recipients', req, function(err, res){

 console.log(res);
 });
 */


//Get the Lists the Recipient Is On [GET]
/*
 request.get('https://api.sendgrid.com/v3/contactdb/recipients/bWlzc3NsbGVyQGV4YW1wbGUuY29t/lists', req, function(err, res){

 console.log(res.body);
 });

 */

//Add recipients
var data=
{
    r: [
        {
            "email": "jonewews@example.com",
            "last_name": "Jones",
            "pet": "Indiana",
            "age": 25
        },
        {
            "email": "millwewer@example.com",
            "last_name": "Miller",
            "pet": "FrouFrou",
            "age": 32
        }
    ]
};

console.log(data.r);

request.post('https://api.sendgrid.com/v3/contactdb/recipients',
    { headers:{
        "Authorization": "Bearer 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"},
        "data": data.r},
    function(err, res){

        console.log(err,'--------------------------',res.body);
    });