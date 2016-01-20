/**
 * Created with JetBrains WebStorm.
 * User: manusis   By Ramesh Patel
 * Date: 19/01/16
 */


var assert = require('assert');
var r = require('request');


describe(' Test cases for Lotcart Tracking(vegostics)', function () {

    this.timeout(1000000);

    before(function (done) {

        done();
    });

    beforeEach(function (done) {
        //An action to be performed before each test case
        done();
    })


    it('Tracking Status', function (done) {

        var request = {
            uri: 'http://www.logicbudslogistics.elasticbeanstalk.com/api/shippment/AWB-LBL-4'
        };

        r.get(request.uri, function (err, res, body) {
            assert.equal(200, res.statusCode, "ERROR");
            done();

        });
    }),

        it('Update order', function (done) {

            var request = {
                uri: 'http://logicbudslogistics.elasticbeanstalk.com/api/shippment?id=AWB-LBL-4&status=DVL'
            };

            r.get(request.uri, function (err, res, body) {
                assert.equal(200, res.statusCode, "ERROR");
                done();

            });

        }),

        it('Post Order', function (done) {
            var request = {
                url: 'http://logicbudslogistics.elasticbeanstalk.com/api/shippment', //URL to hit
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
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
            }
            r.post(request, function (err, res) {
                assert.equal(200, res.statusCode, "ERROR");
                done();
            })
        }),

        it('Label generation', function (done) {
            var request = {
                uri: 'http://logicbudslogistics.elasticbeanstalk.com/api/label/AWB-LBL-4'
            }
            r.get(request, function (err, res) {
                assert.equal(200, res.statusCode, "ERROR");
                done();
            });
        }),

        it('Get pincode', function (done) {
            var request = {
                url: 'http://logicbudslogistics.elasticbeanstalk.com/api/pincode'
            }
            r.get(request, function (err, res) {
                assert.equal(200, res.statusCode, "ERROR");
                done();
            });
        }),

        it('Get shipping charge', function (done) {
            var request = {
                url: 'http://logicbudslogistics.elasticbeanstalk.com/api/rates/560097'
            }
            r.get(request, function (err, res) {
                assert.equal(200, res.statusCode, "ERROR");
                done();
            });
        });


});




