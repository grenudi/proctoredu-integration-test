"use strict";
const Express = require("express");
const app = Express();
const cfg = require("../package.json").CONFIG;

const pubLocation = Express.static("./client-browser");
app.use(pubLocation);

app.get("/.well-known/acme-challenge/DSxUs3P938aSB-zhey2xgyH2LZrGYHj4rsXlyvhD2DA",(req,res)=>{
    res.sendFile(__dirname+"/https/cert.txt");
})

app.listen(cfg.server.port, ()=>{
    console.warn(`We Rolling on port ${cfg.server.port}`);
})
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