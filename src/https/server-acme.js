const express = require('express');
const app = express();
const cfg = require("../../package.json").CONFIG.serverACME;

app.use(express.static(__dirname, { dotfiles: 'allow' } ));
app.listen(cfg.port, () => {
  console.log(`ACME serving on ${cfg.port}`);
});