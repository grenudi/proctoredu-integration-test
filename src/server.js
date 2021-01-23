"use strict";
// Dependencies
const Express = require("express");
const app = Express();

const cfg = require("../package.json").CONFIG;
const https = require("./https/app-https");

const publica = require("./mid/public/public.js");
const imitateClient = require("./mid/mock/auth-client.js");
const privata = require("./mid/private/private.js");

app
.use(publica)
.use(imitateClient)//authwall can be used here
.use(privata);

https.wrap(app)
        .listen(cfg.server.https.port, () => {
            console.log(`HTTPS Server running on port ${cfg.server.https.port}`);
        });