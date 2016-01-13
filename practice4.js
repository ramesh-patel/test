/**
 * Created by atishay-jain on 13/1/16.
 */
/*
 Created by Ramesh Patel

 .......... Sendgrid Contact .............

 */

var request= require('request');
var contact= require('sendgrid-contacts')(api_key= "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");

var req = {
    headers:{

        "Authorization": "Bearer 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"

    }
};

var body = [
    {
        "email": "ramesh@example.com",
        "first_name" : "ramesh",
        "last_name": "patel",

    }
]

var params = {
    "list_id" : 46123,
    //"recipient_id"  : "am9uZXNzc3NzQGV4YW1wbGUuY29t"
}

var  body1 = {
    "recipient_id" : "awqawaqwaqwawwqa"
}

//var uri = "https://api.sendgrid.com/v3/contactdb";

//Get all list

contact.lists.getAllLists(function(err,res){
    if(err) {
        console(err);
    } else {
        console.log(res);
    }
});




//Add list recipient
/*
contact.lists.addListRecipients(params,body1,function(err,res){
    if(err) {
        console(err);
    } else {
        console.log(res);
    }
});
*/




//Add recipient
/*
contact.recipients.addRecipients(body,function(err,res){
    console.log(res);
});
*/




 //Retreive  a list recipent
/*
 request.get('https://api.sendgrid.com/v3/contactdb/lists/46123/recipients', req, function(err, res){
 console.log(err, "..................", res.body);
 });
 */




// not working
 //Upadate  a list name
/*
 request.patch('https://api.sendgrid.com/v3/contactdb/lists/46123', req, function(err, res){
 console.log(err, "..................", res.body);
 });
 */





 //List Recipients GET
/*
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




// not working
//Add recipients
/*
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
    {
        headers: {
            "Authorization": "Bearer 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"
        },
        "data": data.r
    },
    function(err, res){

        console.log(err,'--------------------------',res.body);
    });

*/


//Update recipient
/*
var data = {
    r :[
        {
            "email": "jonesssss@example.com",
            "first_name": "ramesh"
        }
    ]
}
request.patch('https://api.sendgrid.com/v3/contactdb/recipients',
    {
        headers: {
            "Authorization": "Bearer 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"
        },
        "data": data.r
    },
    function(err, res){

        console.log(err,'--------------------------',res.body);
    });

*/