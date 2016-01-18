var store = require("storehippo-nodejs-sdk")({
    storename : "atishaydemo2",
    access_key : "admin"
});


var request = {
    entity : 'orderId',
    recordId : 'GMVBS44541'
}
store.get(request, function(err, response){
   // if(err) throw err;
    console.log("Error==========>>>>>>>>>>>",err)
   // console.log("Response code=====>>>>>>>>",response.statusCode);
    console.log("Response==========>>>>>>>>",response);
})
