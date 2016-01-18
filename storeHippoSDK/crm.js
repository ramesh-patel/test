var store = require("storehippo-nodejs-sdk")({
    storename : "crm",
    access_key : "trial_user"
});

var request = require("request");


var formdata = {
    entity : "shipments",
    query : {
        filters : '',
        start : '',
        limit : ''
    }
}

store.list(formdata, function(err, response){
    if(err) throw err;
    console.log("Error==========>>>>>>>>>>>",err)
    console.log("Response==========>>>>>>>>",response.statusCode);
    console.log("Response==========>>>>>>>>",response);
})
