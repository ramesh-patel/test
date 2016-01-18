var request = require("request");
var parser = require('xml2json');

//var temp;
request.post({
    url: 'https://api.zaakpay.com/checktransaction',
    form:{
        merchantIdentifier:'9876699565',
        orderId:'897698973'
    }


},function (err, httpResponse, body) {




            if (err) throw err;

            // console.log("Error==========>>>>>>>>>>>",err)
            // console.log("Response code=====>>>>>>>>",httpResponse.statusCode);
            console.log("Response==========>>>>>>>>",typeof parser.toJson(body));
            console.log("Response==========>>>>>>>>", parser.toJson(body));


            var temp = JSON.parse(parser.toJson(body))


            var responseStatus = temp.zaakpay_response.response_element[0].responsecode;

            console.log("-------------------", responseStatus);


      if(responseStatus==100) {

      }



});






