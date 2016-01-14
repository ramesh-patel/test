/**
 * Created with JetBrains WebStorm.
 * User: manusis   By Ramesh Patel
 * Date: 12/01/16
 * Time: 12:21
 * To change this template use File | Settings | File Templates.
 */



var request = require('request');
var assert = require('assert');

//post
//get
//delete

/*
 var formdata = {
 url: '',
 data: "",
 body:  ""
 }
 */
var formdata2 = {
    url: 'http://www.logicbudslogistics.elasticbeanstalk.com/api/pincode', //URL to hit
    method : 'HTTPGET'

};



//Track/To get shipment details   **working

var uri = 'http://www.logicbudslogistics.elasticbeanstalk.com/api/shippment/369310187036';

request.get(uri, function(err,res,body) {

    console.log("Track shipment details",JSON.parse(body));
});



//For POST  order    **working

var formdata = {
    url: 'http://logicbudslogistics.elasticbeanstalk.com/api/shippment', //URL to hit
    method: 'HTTPPOST',
    data: {

        "OrderID": "OD005",
        "Buyer": {
            "ContactName": "klnk",
            "AddressLine1": "knklnkn",
            "AddressLine2": "knlknlkn",
            "AddressLine3": "nknlkn",
            "City": "Bangalore",
            "StateCode": "KA",
            "Pincode": 560097,
            "CountryCode": "IND",
            "ContactNumber": "435446",
            "EmailAddress": "xyz@gmail.com"
        },
        "Seller": {
            "ContactName": "lbbljbljblj",
            "AddressLine1": "lknlknkn",
            "AddressLine2": "nknnknknl",
            "AddressLine3": "klnklnkl",
            "City": "Bangalore",
            "StateCode": "KA",
            "Pincode": 560097,
            "CountryCode": "IND",
            "VATNumber": 564654,
            "CSTNumber": 456454,
            "ContactNumber": "468768464",
            "EmailAddress": "seller@abcxyz.com"
        },
        "Status": "INT ",
        "CartProducts": [
            {
                "ProductID": 30008,
                "ProductName": "jkbkj",
                "Quantity": 12,
                "Price": 100
            }
        ],
        "PaymentMode": "PREPD",
        "CollectAmount": 200,
        "DeliveryBoyID": 1
    }

};
request.post(formdata, function (e,r, b) {

    console.log("<<<-post order------>>>>>>> [posted]", b);
});




//Update Order- This is to update shipment status from Lotcart. For example cancelling the order.

var uri = 'http://logicbudslogistics.elasticbeanstalk.com/api/369310187025/null';

request.get(uri, function(err,res,body) {

    console.log("Update order",body);
});



// Label generation/ This will give the byte code of the pdf file, which then be opened as PDF using filecontent "application/pdf"      ***not working

var uri = 'http://logicbudslogistics.elasticbeanstalk.com/api/label/369310187036';

request.get(uri, function(err,res,body) {

    console.log("label generation pdf",body);
});



//For GET pincode     **working

request.get('http://logicbudslogistics.elasticbeanstalk.com/api/pincode', function(err , res, body) {

    console.log("(pincode retrival========>>>>>>>>>>>>",body);

});


