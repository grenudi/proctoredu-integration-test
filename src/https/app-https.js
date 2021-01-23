"use strict";
// Dependencies
const http = require('http');
const https = require('https');
const Express = require('express');
const cfg = require("../../package.json").CONFIG;
const cred = require("./credentials.js");

const app = Express();
app.use((req,res)=>{
    res.set('location', `https://${req.get('host')}`);
    res.status(308).send();
})

http.createServer(app)
	.listen(cfg.server.http.port, () => {
		console.log(`HTTP Server running on port ${cfg.server.http.port}`);
	});

const wrap = appS=>https.createServer(cred.get(), appS);

module.exports = {
	wrap
}
