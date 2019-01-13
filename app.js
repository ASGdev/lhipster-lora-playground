const express = require('express')
const app = express()
const port = 3000

/* TTN things */
const ttn = require("ttn");

const appID = "lhispter";
const accessKey="ttn-account-v2.DvgYYPbyIvfbkFrvyYBcSljKgQj1l0qEeIr1UBMMLA4"

let client = new ttn.DataClient(appID, accessKey, 'ttn-handler-eu:1883');

/**/

app.use(express.static('.'))

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/emergency/:v', (req, res) => {
	
	client.send("node1", "yo", 1, false, "replace");
	
	
	res.send("ok");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))