"use strict";
// Dependencies
const Express = require("express");
const cfg = require("../package.json").CONFIG;
const appHTTPS = require("./https/app-https");
const app = Express();

app.use((req, res) => {
	res.send('Hello there !');
});

appHTTPS.wrap(app)
        .listen(cfg.server.https.port, () => {
            console.log(`HTTPS Server running on port ${cfg.server.https.port}`);
        });