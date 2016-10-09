var webpack = require('webpack');
var gulp = require("gulp");
var gutil = require("gulp-util");


var mode = process.argv[2] == "production" ? "production" : "development";
var config = {
    context: __dirname,
    entry: {
      index: "./index.js",
      vendor: ["react", "react-dom", "react-router", "axios", "react-redux", "redux", "react-router-redux"]
    },
    watch: mode != 'production',
    cache: true,
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel', // 'babel-loader' is also a valid name to reference
          query: {
            presets: ["react", 'es2015']
          }
        }
      ]
    },
    output: {
        path: __dirname + "/dist",
        filename: "app.js"
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env':{
          'NODE_ENV': JSON.stringify(mode)
        }
      }),
      new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.js"),
    ]
}

if (mode == "production") {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

webpack(config,  function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
          chunks: false,
        colors: true
        }));
});
