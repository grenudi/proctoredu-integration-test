const jwt = require("jwt-simple");
const cfg = require("../../package.json").CONFIG;
const pdb = require("../pseudoDB/main.js");

const formJWT = payload=>{
    var secret = pdb.get('proctorSecret');
    console.log("formJWT:  ",payload);
    return jwt.encode(payload, secret, "HS256");
}
const readJWT = JWT=>{
    var secret = cfg.serverProc.badPlaceForSecrets;
    return jwt.encode(payload, secret);
}

module.exports = {
    jwt: {
        enc: formJWT,
        dec: readJWT
    }
};