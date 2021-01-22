"use strict";
// Dependencies
const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const cfg = require("../package.json").CONFIG;

const appS = express();
appS.use((req, res) => {
	res.send('Hello there !');
});

const app = express();
app.use((req,res)=>{
    res.set('location', `https://${cfg.domain.main}`);
    res.status(302).send();
})

// Certificate
const privateKey = fs.readFileSync(__dirname+'/https/certbot.d/config/live/craftclouds.ddns.net/privkey.pem', 'utf8');
const certificate = fs.readFileSync(__dirname+'/https/certbot.d/config/live/craftclouds.ddns.net/cert.pem', 'utf8');
const ca = fs.readFileSync(__dirname+'/https/certbot.d/config/live/craftclouds.ddns.net/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};


// Starting both http & https servers
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, appS);

httpServer.listen(cfg.server.http.port, () => {
	console.log(`HTTP Server running on port ${cfg.server.http.port}`);
});

httpsServer.listen(cfg.server.https.port, () => {
	console.log(`HTTPS Server running on port ${cfg.server.https.port}`);
});



/*HTTPS ATTEMPT 2
const Express = require("express");
const app = Express();
const cfg.server = require("../package.json").CONFIG;

const pubLocation = Express.static("./client-browser");
app.use(pubLocation);

app.get("/.well-known/acme-challenge/DSxUs3P938aSB-zhey2xgyH2LZrGYHj4rsXlyvhD2DA",(req,res)=>{
    res.sendFile(__dirname+"/https/cert.txt");
})

app.listen(cfg.server.server.port, ()=>{
    console.warn(`We Rolling on port ${cfg.server.server.port}`);
})
*/





/*
//HTTPS greenlock setup
var pkg = require('../package.json');
var Greenlock = require('greenlock');

var greenlock = Greenlock.create({
    packageRoot: "../",
    configDir: "./https/greenlock.d/",
    packageAgent: pkg.name + '/' + pkg.version,
    maintainerEmail: pkg.author,
    staging: true,
    notify: function(event, details) {
        if ('error' === event) {
            // `details` is an error object in this case
            console.error(details);
        }
    }
});

greenlock.manager
    .defaults({
        agreeToTerms: true,
        subscriberEmail: 'idunerg@gmail.com'
    })
    .then(function(fullConfig) {
        // ...
        var altnames = ['craftclouds.ddns.net', 'www.craftclouds.ddns.net', 'craftclouds.tplinkdns.com'];
        //add domains greenlock
        greenlock
            .add({
                subject: altnames[0],
                altnames: altnames
            })
            .then(function() {
                // saved config to db (or file system)
            });
        console.log("\n\nSIIIIIIIIIIIIT\n\n", fullConfig)
        //<TEST GREENLOCK
        // greenlock
        //     .get({ servername: subject })
        //     .then(function(pems) {
        //         if (pems && pems.privkey && pems.cert && pems.chain) {
        //             console.info('Success');
        //         }
        //         //console.log(pems);
        //     })
        //     .catch(function(e) {
        //         console.error('Big bad error:', e.code);
        //         console.error(e);
        //     });
    });
*/