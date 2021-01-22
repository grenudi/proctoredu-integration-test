const fs = require('fs');
const cfg = require('../../package.json').CONFIG.server;
const certRoot = __dirname+`/certbot.d/config/live/${cfg.domain.main}`;
// certificate
const privatekey = fs.readFileSync(certRoot+'/privkey.pem', 'utf8');
const certificate = fs.readFileSync(certRoot+'/cert.pem', 'utf8');
const ca = fs.readFileSync(certRoot+'/chain.pem', 'utf8');

const credentials = {
	key: privatekey,
	cert: certificate,
	ca: ca
};
//> certificate

module.exports = {
    get: ()=>credentials
}