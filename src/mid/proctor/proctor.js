const api = require("./mid/api.js");

const wrap = app=>
    api.wrap(app);

module.exports = {
    wrap
};