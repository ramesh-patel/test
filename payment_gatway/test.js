var crypto = require('crypto');
var parser = require('xml2json');
var request = require('request');


var options = {
    "url": 'https://api.zaakpay.com/checktransaction',
    "form": {
        'merchantIdentifier': "",
        'orderId': "OID005",
        'mode': '0'
    }
};

var data1 = [];
for (var key in options.form) {
    data1.push(options.form[key]);
}
//console.log(data1);
var query = JSON.stringify(data1);
query = query.replace(/"/g, "'");
query = query.replace(/,/g, "");
query = query.replace(/[\[\]]+/g, '');


console.log("query--->>>>>>", query);
options.form['checksum'] = crypto.createHmac('sha256', "").update(query).digest('hex');

request.post(options, function (err, httpResponse, body) {

    if (err) throw err;

    /*console.log("request==========>>>>>>>>>>>", options)*/
    //console.log("Response code=====>>>>>>>>",httpResponse.statusCode);
    // console.log("type of data==========>>>>>>>>",typeof parser.toJson(body));
    console.log("Response in json==========>>>>>>>>", body);
    //console.log(options.checksum);


    /* var temp = JSON.parse(parser.toJson(body));
     console.log(temp.zaakpay_response.response_element.responsecode);
     */
});
