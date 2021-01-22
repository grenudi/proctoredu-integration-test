const fs = require('fs');
// Certificate
const privateKey = fs.readFileSync(__dirname+'/certbot.d/config/live/craftclouds.ddns.net/privkey.pem', 'utf8');
const certificate = fs.readFileSync(__dirname+'/certbot.d/config/live/craftclouds.ddns.net/cert.pem', 'utf8');
const ca = fs.readFileSync(__dirname+'/certbot.d/config/live/craftclouds.ddns.net/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};
//> certificate

module.exports = {
    get: ()=>credentials
}