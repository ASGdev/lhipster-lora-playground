const data = require("ttn").data;
const application = require("ttn").application;
const appID = "lhispter";
const accessKey="ttn-account-v2.DvgYYPbyIvfbkFrvyYBcSljKgQj1l0qEeIr1UBMMLA4"

let dev = null;

data(appID, accessKey)
  .then(function (client) {
    client.on("uplink", function (devID, payload) {
      console.log("Received uplink from ", devID)
	  dev = devID;
      //console.log(payload)
	  
	  console.dir(payload.gateways);
	  
	  console.log("sending 1...");
	  client.send("node1", new Buffer([ 0x1 ]));
    })
	
	

  })
  .catch(function (err) {
    console.error(err)
    process.exit(1)
  })

// discover handler and open application manager client
application(appID, accessKey)
  .then(function (client) {
    return client.get()
  })
  .then(function (app) {
    console.log("Got app", app)
  })
  .catch(function (err) {
    console.error(err)
    process.exit(1)
  })
  
