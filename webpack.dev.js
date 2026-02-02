const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

export default merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
   devServer: {
     static: './dist',
   },
 });