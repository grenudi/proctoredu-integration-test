"use strict"
const Express = require('express');
const app = Express();
const cfg = require("../../../package.json").CONFIG;
const pdb = require("../../pseudoDB/main.js");
const procjwt = require("../../services/proctoredu.js").jwt;
const bp = require("body-parser");


app
.post("/api/report",bp(),(req,res)=>{
    const reqSecret = req.header("X-Api-Key");
    console.log("\nPOST /api/report:\n",req.body);

    if(reqSecret !== pdb.get("proctorSecret")){
        // res.status(401).send();
        console.log("POST /api/report --> NON VALID:\n",reqSecret,req.body);
        return 1;
    }
    res.status(200).send();

    pdb.results.add(req.body.id, req.body);
})
.get("/teacher",(req,res)=>{
    res.sendFile(__dirname+"/serve-routed/teacher.html");
})
.post("/teacher/:id",(req,res)=>{
    res.end(JSON.stringify(pdb.sessions.all()));
})
.get("/classroom/:examid",(req,res)=>{
    console.log("/classroom?:examid: ",req.cookies);
    if(pdb.sessions.isi(req.params.examid)){
        res.sendFile(__dirname+"/serve-routed/classroom.html");
    }else{
        res.set('location', `https://${cfg.server.domain.main}/401.html`);
        res.status(302).send();
    }
})
.get("/classroom",(req,res)=>{
    console.log("/classroom: ",req.cookies);
    const payload = {...req.cookies,
        referer: `https://${cfg.server.domain.main}/results/${req.cookies.id}`,
        url: `https://${cfg.server.domain.main}/classroom/${req.cookies.id}`,
        api: "https://${cfg.server.domain.main}/api/report"
    };
    console.log("GET /classroom -->PAYLOAD:\n",payload);
    const token = procjwt.enc(payload);

    pdb.sessions.add(req.cookies.id, token);

    console.log("TOKEN: ",token);
    res.set('location', `https://${cfg.serverProc.domains[0]}/api/auth/jwt?token=${token}`);
    res.status(302).send();
})
.get("/results/:examid",(req,res)=>{
    if(pdb.sessions.isi(req.params.examid)){
        res.cookie('lastexamid', req.params.examid, { maxAge: 900000, httpsOnly: true });
        res.sendFile(__dirname+"/serve-routed/results.html");
    }else{
        res.set('location', `https://${cfg.server.domain.main}/401.html`);
        res.status(302).send();
    }
})
.get("/results",(req,res)=>{
    res.sendFile(__dirname+"/serve-routed/results.html");
})
.post("/results/:examid",(req,res)=>{
    // console.log("POST /results/:examid", req.params);
    const examid = req.params.examid;
    if(pdb.results.isi(examid)){
        const currentResult = pdb.results.get(examid);
        currentResult.mainTest = "COMPLETE";
        res.body = currentResult;
        res.end(JSON.stringify(currentResult));
        //send json with results
    }else{
        res.status(401).send();
        return 1;
    }
})
;
pdb.results.add("examid",{one: "one", subject: "testing examid"});
// .get("/results",(req,res)=>{
//     //form examid
// });

module.exports = app;