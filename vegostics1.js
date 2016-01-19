var r = require("request");



var Order = function(apiKey, options) {
    if (!(this instanceof Order)) {
        return new Contacts(apiKey, options);
    }


    // do this to mantain similarity to other libs
    var uriParts = {};
    uriParts.protocol = this.options.protocol || "http";
    uriParts.host = this.options.host || "www.logicbudslogistics.elasticbeanstalk.com";
    uriParts.port = this.options.port || "";
    uriParts.endpoint = this.options.endpoint || "/api";
    delete this.options.protocol;
    delete this.options.host;
    delete this.options.port;
    delete this.options.endpoint;
    this.options.uriParts = uriParts;

    var uri = this.options.uri || uriParts.protocol + "://" + uriParts.host + (uriParts.port ? ":" + uriParts.port : "") + uriParts.endpoint;

    //Standard callback for all requests
    var apiCallback = function (callback) {
        return function (err, resp, body) {
            var json;
            if (err) return callback(err, null);
            try {
                if (typeof(body) === 'object') {
                    json = body;
                    console.log(json);
                }
                else if (typeof(body) === 'undefined') {
                    json = {};
                    console.log(json);
                }
                else {
                    json = JSON.parse(body);
                    console.log(json);
                }
            }
            catch (e) {
                // be more granular with the error message
                e.message = e.message + " JSONPARSEERROR when parsing: " + body;
                return callback(new Error(e), null);
            }

            return callback(null, json);

        };
    }


    //Lists
    this.get = {
        getDetails: function (body, callback) {
            request({
                    uri: uri + "/shippment/" + params.id,
                    method: 'GET',
                    json: body
                },
                apiCallback(callback));
        },

    };
}
