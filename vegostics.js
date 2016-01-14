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
    url: 'http://logicbudslogistics.elasticbeanstalk.com/api/pinocde', //URL to hit
    method: 'HTTPGET',

};



//For POST

var formdata = {
    url: 'http://logicbudslogistics.elasticbeanstalk.com/api/shippment', //URL to hit
    method: 'HTTPPOST',
    form: {

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
request(formdata, function (e,r, b) {

    console.log("<<<-------------->>>",b);
 //   console.log(formdata.form);
    //  assert.equal(e, null, 'Error occured');
    //   assert.equal(r.status, 200, 'Wrong Status');

});


//For GET {ID}
/*
var formdata1 = {
    url: 'http://vegostics.com/api/shippment/{ID}', //URL to hit
    method: 'POST',
    form: {

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

req = request.get(formdata1, function(res) {

    //console.log(formdata1.form.OrderID);

});

*/

//For GET pincode     **response in form of document
/*
request.get(formdata2, function(err , res, body) {

    console.log(err,"========>>>>>>>>>>>>",body);

});
*/

//For PUT update order
/*
var formdata3 = {
    url: 'http://vegostics.com/api/shippment/{ID}/{Status}', //URL to hit

    method: 'PUT',
    //Lets post the following key/values as form
    form: {

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


request.get(formdata3, function(res) {

    console.log(formdata3.form.Status);

});
*/
