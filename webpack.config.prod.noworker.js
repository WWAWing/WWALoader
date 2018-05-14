const config = require("./webpack.config.prod.js");
const webpack = require("webpack");

config.plugins[0] = new webpack.DefinePlugin({
    IS_WEB_WORKER_MODE: JSON.stringify(false)
});
config.output.filename = "wwaloader.noworker.js";

module.exports = config;
