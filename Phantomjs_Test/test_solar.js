var request = require('request');
var cheerio = require('cheerio');
var fs = require("fs");
var elements = [];
var sheet = 1;
var states = [ "Delhi", "Goa" ];
var j = 2;

var check = function(j, next){
    if (j == 0) {
        return next();
    }
    console.log("----here---", j);
    j--;
    var url = 'http://indiagoessolar.com/solar-installer-list/?state='+ states[j-1] +'&status=all#search';
    request.get(url, function (err, response, body) {
        console.log('-------------->>>>', response.statusCode);
        var a = cheerio.load(body);
        var url = [];
        a('.more').each(function (index) {
            url.push(this.attribs.href);
        });
        process(url, function () {
            var file_name = 'solar_data' + sheet + '.txt';sheet++;
            fs.writeFile(file_name, JSON.stringify(elements), function (err, body) {
                console.log("------------===", err, "===-------", body);
                check(j, next);
            });

        })
    });
};

var process = function (url, next) {
    if (!url.length) {
        return next();
    }

    var u = url.shift();
    test(u, function () {
        process(url, next);
    })
};

var test = function (u, next) {
    var url = 'http://indiagoessolar.com' + u;
    console.log('---------->>>>',url);
    request.get(url, function (err, response, body) {
        b = cheerio.load(body);
        var temp = {};
        var j = 0;
        b('.company-name').each(function (ele) {
            console.log('----------->>>>>', ele, this);
            var name = "company name";
            if(this.children[0]) {
                temp [name] = this.children[0].data;
            }
        });
        b('.block-wr').each(function (ele) {
            console.log('----------->>>>>', ele, this);
            if(j==0){
                var name = "name";
            }
            else if(j==1)
            {
                var name = "phone";
            }
            else if(j==2){
                var name = "mobile";
            }
            else if(j==3){
                var name = "email";
            }
            else if(j>3){
                var name = "address" + j;
            }
            temp [name] = this.children[2].data;
            j++;
        });
        elements.push(temp);
        return next();
    })
};


check(j, function(){
       console.log("----should be the end----");
});
