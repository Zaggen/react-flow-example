/* eslint-env node */

// module.exports = require('./next.config').webpack()
//
const webpack = require('webpack')

module.exports = {
  plugins: [new webpack.NamedModulesPlugin()],
  resolve: {
    modules: ['app'],
  },
};
