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
        "email": "ramesh1@example.com",
        "first_name" : "ramesh1",
        "last_name": "patel1",

    }
]

var params = {
    "list_id" : 46123,
    //"recipient_id"  : "am9uZXNzc3NzQGV4YW1wbGUuY29t"
}

var params1 = {
    "custom_field_id" : "r_name",
    //"recipient_id"  : "am9uZXNzc3NzQGV4YW1wbGUuY29t"
}

var  body1 = {
    "recipient_id" : "YUBhLmNvbQ=="
}

var body2 = {
    "name": "pet",
    "type": "text"

}



//Create List  **working
/*
contact.lists.createList(body2,function(err,res){
    if(err) {
        console(err);
    } else {
        console.log(res);
    }
});
*/

//Get all list  **working
/*
contact.lists.getAllLists(function(err,res){
    if(err) {
        console(err);
    } else {
        console.log(res);
    }
});
*/

//Get single recipients   **working
/*
 contact.recipients.getRecipient(body1,function(err,res){
 if(err) {
 console(err);
 } else {
 console.log(res);
 }
 });
*/

//Get all recipients    **working
/*
contact.recipients.getRecipients(body,function(err,res){
    if(err) {
        console(err);
    } else {
        console.log(res);
    }
});*/

//Add recipient to list   **working
/*
contact.recipients.addRecipients(body,  function(err,res){
    console.log(res);
    var body = [];

    for(var i= 0;i < res.persisted_recipients.length;i++)
    {
        body.push(res.persisted_recipients[i]);
    }

    contact.lists.addListRecipients(params,body,function(err,res) {
        console.log(res);
    });
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