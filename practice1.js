/**
 * Created with JetBrains WebStorm.
 * User: manusis   By Ramesh Patel
 * Date: 12/01/16
 * Time: 12:21
 * To change this template use File | Settings | File Templates.
 */



var request = require('request');
var assert = require('assert');

//post
//get
//delete

/*
 var formdata = {
 url: '',
 data: "",
 body:  ""
 }
 */



//For POST
var formdata = {
    url: 'http://vegostics.com/api/shippment', //URL to hit
    method: 'POST',
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

};

request(formdata, function (e, r, b) {
    console.log(b);
    console.log(formdata.form);
    //  assert.equal(e, null, 'Error occured');
    //   assert.equal(r.status, 200, 'Wrong Status');

});






//For GET {ID}
var formdata1 = {
    url: 'http://vegostics.com/api/shippment/{ID}', //URL to hit
    method: 'POST',
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

};

req = request.get(formdata1, function(res) {

    console.log(formdata1.form.OrderID);

});


//For GET pincode
var formdata2 = {
    url: 'http://vegostics.com/api/pinocde', //URL to hit
    //qs: {from: 'blog example', time: +new Date()}, //Query string data
    method: 'POST',
    //Lets post the following key/values as form
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

};


request.get(formdata2, function(res) {

    console.log(JSON.stringify(parseInt(formdata2.form.Buyer.Pincode)));

});


//For PUT update order
var formdata3 = {
    url: 'http://vegostics.com/api/shippment/{ID}/{Status}', //URL to hit

    method: 'PUT',
    //Lets post the following key/values as form
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

};


request.get(formdata3, function(res) {

    console.log(formdata3.form.Status);

});

ms-widget="ms.modal" data-msd-page="test" data-msd-header="{{records}}"



    <div ms-widget="jobs" style="margin-bottom: 20px">

    <div style="margin-bottom: 50px"></div>


    <!--
    <div ms-widget="ms.entity" ms-data-entity="ms.job_executions" style="margin-bottom: 20px">
    -->
    <div class="container ms-fs-16"  style="margin-bottom: 50px" >
    <table class="table table-striped table-bordered" >
    <thead>
    <tr>
    <th>
    <div class="col-sm-2">Name</div>
    </th>
    <th>
    <div class="col-sm-2">Entity</div>
    </th>
    <th>
    <div class="col-sm-1">Interval</div>
    </th>
    <th>
    <div class="col-sm-1">Format</div>
    </th>
    <th>
    <div class="col-sm-2">Command</div>
    </th>
    <th>
    <div class="col-sm-2">Created on</div>
</th>
<th>
<div class="col-sm-2">Created by</div>
</th>
</tr>
</thead>
<tbody>
<div ng-repeat="jobs in store_jobs">
    <div class="row">
    <div class="col-sm-2"> <a >{{jobs.name}}</a></div>
<div class="col-sm-2">{{jobs.entity}}</div>
<div class="col-sm-1">{{jobs.interval}}</div>
<div class="col-sm-1">{{jobs.format}}</div>
<div class="col-sm-2">{{jobs.command}}</div>
<div class="col-sm-2">{{jobs.created_on}}</div>
<div class="col-sm-2">{{jobs._created_by}}</div>

</div>
</div>
</tbody>
</table>
</div>
</div>
