var request = require("request");
var parser = require('xml2json');
sha256 = require('js-sha256');



request.post({
    url: 'https://api.zaakpay.com/checktransaction',
    form:{
        merchantIdentifier:'51eb974443284de0a95188cd95dad180',
        orderId:'OID005',
        mode : 0,
        security_key : 'de2171d6d41e46b1952ad61f55f8e5a4',
        checksum : sha256('51eb974443284de0a95188cd95dad180"OID005"0')

    }

},function (err, httpResponse, body) {

            if (err) throw err;

            // console.log("Error==========>>>>>>>>>>>",err)
            // console.log("Response code=====>>>>>>>>",httpResponse.statusCode);
            console.log("type of data==========>>>>>>>>",typeof parser.toJson(body));
            console.log("Response in json==========>>>>>>>>", parser.toJson(body));


            var temp = JSON.parse(parser.toJson(body));

            var responseStatus = temp.zaakpay_response.response_element.responsecode;

            console.log("status code-------------", responseStatus);

    console.log(sha256("'51eb974443284de0a95188cd95dad180''OID005''0'"));

      if(responseStatus==100) {
            console.log("Transaction success");
      }



});






