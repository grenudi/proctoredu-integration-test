const jwt = require("jwt-simple");
const cfg = require("../../package.json").CONFIG;

const formJWT = payload=>{
    var secret = global.pseudoDB.proctoredu.secret;
    return jwt.encode(payload, secret);
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