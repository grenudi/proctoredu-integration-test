const Express = require('express');
const app = Express();

app
.use(Express.static(__dirname+"/serve-static"));

module.exports = app;