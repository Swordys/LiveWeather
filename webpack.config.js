var webpack = require('webpack');

module.exports = {
    entry: "./components/main.jsx",
    output: {
        path: "./src",
        filename: "bundle.js"
    },
    devServer: {
        inline: true,
        port: 8000
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.jsx'],
        alias: {
            App: "components/App.jsx",
            Navigate: "components/Nav.jsx",
            Weather: "components/Weather.jsx",
            GetWeather: "components/GetWeather.jsx",
            WeatherMsg: "components/WeatherMsg.jsx",
            About: "components/About.jsx",
            Examples: "components/Examples.jsx",
            WeatherMap: "api/WeatherMap.jsx",
            Flikr: "api/flikr.jsx"
        }
    },
    devtool: "cheap-module-eval-source-map",

    plugins: [
       new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        })
    ]
  
}