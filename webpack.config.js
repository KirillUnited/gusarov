const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        "app": path.resolve(__dirname, "src/assets/js", "index.js")
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "_site", "assets/js"),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: false,
                            postcssOptions:{
                                plugins:[require("autoprefixer")]
                            }
                        }
                    },
                    "sass-loader"
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `../styles/[name].css`,
            chunkFilename: "../styles/[id].[hash].css"
        }),
    ]
};
