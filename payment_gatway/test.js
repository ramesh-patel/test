
var crypto = require('crypto');
var parser = require('xml2json');
var request = require('request');


var options = { "url" : 'https://api.zaakpay.com/checktransaction',
    "form" : {
        'merchantIdentifier': "51eb974443284de0a95188cd95dad180",
        'orderId': "OID005",
        'mode': '0',
    }};

var data1 = [];
for (var key in options) {
    data1.push(options[key]);
}
//  console.log(data1);
var query = JSON.stringify(data1);
query = query.replace(/"/g, "'");
query = query.replace(/,/g, "");
query = query.replace(/[\[\]]+/g, '');

console.log(query);
options['checksum'] = crypto.createHmac('sha256', "de2171d6d41e46b1952ad61f55f8e5a4").update(query).digest('hex');

request.post(options,function (err, httpResponse, body) {

    if (err) throw err;

    //console.log("Error==========>>>>>>>>>>>", body)
    // console.log("Response code=====>>>>>>>>",httpResponse.statusCode);
    // console.log("type of data==========>>>>>>>>",typeof parser.toJson(body));
    console.log("Response in json==========>>>>>>>>", parser.toJson(body));
    //console.log(options.checksum);


    // var temp = JSON.parse(parser.toJson(body));



});