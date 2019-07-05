


const path = require("path");
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const getFilesFromDir = require("./config/files");
const PAGE_DIR = path.join("src", "pages", path.sep);

const htmlPlugins = getFilesFromDir(PAGE_DIR, [".html"]).map( filePath => {
    const fileName = filePath.replace(PAGE_DIR, "");
    // { chunks:["contact", "vendor"], template: "src/pages/contact.html",  filename: "contact.html"}
    return new HtmlWebPackPlugin({
        chunks:[fileName.replace(path.extname(fileName), ""), "vendor"],
        template: filePath,
        filename: fileName
    })
});


const entry = getFilesFromDir(PAGE_DIR, [".js"]).reduce( (obj, filePath) => {
    const entryChunkName = filePath.replace(path.extname(filePath), "").replace(PAGE_DIR, "");
    obj[entryChunkName] = `./${filePath}`;
    return obj;
}, {});

module.exports = (env, argv) => ({  entry: entry,
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name].[hash:4].js"
    },
    devtool: argv.mode === 'production' ? false : 'eval-source-maps',
    plugins: [
        ...htmlPlugins,
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],


    resolve: {

        alias:{
            src: path.resolve(__dirname, "src"),
            components: path.resolve(__dirname, "src", "components")
        }


    },
    devServer: {    contentBase: path.join(__dirname,'src')  },
    module: {    rules: [

            {   test: /\.(js|jsx)$/,   exclude: /node_modules/,

                use: {
                    loader:"babel-loader",
                },   },


            {
                test: /\.(html)$/,
                use: ['html-loader']
            },


            {        test: /\.(css|scss)$/,
                use: [          "style-loader",         "css-loader",           "sass-loader" ,       ],
                exclude: /node_modules/,
            },



            {
                test: /\.(jpg|jpeg|png|gif|PNG|mp3|ttf|svg)$/,


                loader: 'url-loader?limit=1024000'
            }    ]
    },





});
