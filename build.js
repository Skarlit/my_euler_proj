var webpack = require('webpack');
var gulp = require("gulp");
var gutil = require("gulp-util");

webpack({
    context: __dirname,
    entry: {
      index: "./index.js",
      vendor: ["react", "react-dom", "katex", "react-router", "axios", "react-latex"]
    },
    watch: true,
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
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.js"),
      //  new webpack.optimize.UglifyJsPlugin()
    ]
},  function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
});
