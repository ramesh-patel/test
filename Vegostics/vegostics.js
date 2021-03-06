/**
 * Created with JetBrains WebStorm.
 * User: manusis   By Ramesh Patel
 * Date: 17/01/16
 */

var request = require('request');
var fs=require('fs');

//Track/To get shipment details   
var uri = 'http://www.logicbudslogistics.elasticbeanstalk.com/api/shippment/AWB-LBL-4';

request.get(uri, function(err,res,body) {

    console.log("Track shipment details",JSON.parse(body));
});

//For POST  order  
var formdata = {
    url: 'http://logicbudslogistics.elasticbeanstalk.com/api/shippment', //URL to hit
    method: 'POST',
    headers:{
        'Content-Type':'application/json',

    },
    body: {

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
formdata.body=JSON.stringify(formdata.body)
request.post(formdata, function (e,r, b) {

    console.log("Post order  :",e, r.headers, r.statusCode,b);
});

//Update Order status- This is to update shipment status from Lotcart. For example cancelling the order.
var uri = 'http://logicbudslogistics.elasticbeanstalk.com/api/shippment?id=AWB-LBL-12&status=DLV';
request.put(uri, function(err,res,body) {

    console.log("Update order",err,res.statusCode,body);

});

// Label generation/ This will give the byte code of the pdf file, which then be opened as PDF using filecontent "application/pdf"  
var uri = 'http://logicbudslogistics.elasticbeanstalk.com/api/label/AWB-LBL-4';
request.get(uri, function(err,res,body) {

    console.log("label generation pdf",err,res.statusCode,JSON.parse(body));
    const abc=new Buffer(body, 'base64')
    console.log(abc.toString('ascii'))
    fs.writeFile('test.pdf',abc,function(err){
        console.log('err',err)
    })
});

//For GET pincode   
var request_to={
    url:'http://logicbudslogistics.elasticbeanstalk.com/api/pincode',
    method:'GET'
}
request(request_to, function(err , res, body) {

    console.log("(pincode retrival========>>>>>>>>>>>>",res.statusCode,body);
});

//Rates/ This will provide the shipping charges. 
request.get('http://logicbudslogistics.elasticbeanstalk.com/api/rates/560097', function(err , res, body) {

    console.log("Shipping charge(Rs)",body);

});




