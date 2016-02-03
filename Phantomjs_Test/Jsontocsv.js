var request = require('request');
var cheerio = require('cheerio');
var fs = require("fs");
var elements = [];
var sheet = 1;
//var states = [ "Gujarat", "West%20Bengal", "Uttarakhand", "Uttar%20Pradesh", "Tripura", "Tamil%20Nadu","Sikkim","Rajasthan","Punjab","Puducherry","Odisha","Nagaland","Mizoram","Meghalaya","Manipur","Maharashtra", "Madhya%20Pradesh", "Lakshadweep","Kerala","Karnataka","Jharkhand","Jammu%20and%20Kashmir", "Himachal%20Pradesh","Haryana","Daman%20and%20Diu","Dadra%20and%20Nagar%20Haveli","Chhattisgarh","Chandigarh","Bihar","Assam","Arunachal%20Pradesh", "Andhra%20Pradesh", "Andaman%20and%20Nicobar%20Islands" ];
var j = '10';

var check = function(j, next){
    if (j == 0) {
        return next();
    }
    console.log("----here---", j);
    j--;
    var url = 'http://www.justdial.com/Delhi/24-Hours-Petrol-Pumps/ct-4811';
    request.get(url, function (err, response, body) {
        console.log('-------------->>>>', response.statusCode);
        var a = cheerio.load(body);
        var url = [];
        a('.store-details').each(function (index) {
            console.log("----attribs---",  this);

            url.push(this.toString());
            console.log("=====name=================",url)
        });

       // console.log("====array====",url);

        next();
    });

       /* var url = 'http://www.justdial.com/Delhi/24-Hours-Petrol-Pumps/ct-4811';
        request.get(url, function (err, response, body) {
            var a = cheerio.load(body);

            var url = [];
            a('.jcn').each(function (ele) {
                console.log("----attribs---", this);
                url.push(this.next.attribs.href);
            });
            console.log("====array====", abc);
            next()
        });*/

};


check(j, function(){
    console.log("----should be the end----");
});






