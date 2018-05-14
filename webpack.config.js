const webpack = require("webpack");
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    output: {
        filename: "index.dev.js",
        path: path.resolve(__dirname, "lib")
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                use: [{ loader: "ts-loader" }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            IS_WEB_WORKER_MODE: JSON.stringify(true)
        })
    ]
};