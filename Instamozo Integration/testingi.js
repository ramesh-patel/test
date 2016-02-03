var request = require('request');
var options = {
    url: "https://www.instamojo.com/api/1.1/debug/",
    headers: {
        "X-Api-Key": '30b9511f5b66d5c2dffba61cf7c6646e',
        "X-Auth-Token": '6d296b726c8e7400ba11c4fd2d85797a'
    },
    /*contentType: 'application/json',
    form: {
        'amount': "300",
        'purpose': "ghsdiufhy",
        'buyer_name': "ramesh",
        'email': "a@a.com",
        'phone': "7845122356",
        'longurl': "https://www.instamojo.com/@Neidhal/0aa444797597403b93707355866c6ec5",
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
