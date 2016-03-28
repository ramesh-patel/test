var request = require('request');
var options = {
    url: "https://www.instamojo.com/api/1.1/debug/",
    headers: {
        "X-Api-Key": '',
        "X-Auth-Token": ''
    },
    /*contentType: 'application/json',
    form: {
        'amount': "300",
        'purpose': "ghsdiufhy",
        'buyer_name': "ramesh",
        'email': "a@a.com",
        'phone': "7845122356",
        'longurl': "https://www.instamojo.com/@/",
    }*/
}
//console.log(options.data);
request.get(options, function (err, res, b) {
   // console.log(res);
    // console.log(JSON.parse(body));
    console.log("-------------", b);
    //console.log(res);
    //var a=JSON.parse(b);
   // res.redirectUrl(a.payment_request.longurl);


});
