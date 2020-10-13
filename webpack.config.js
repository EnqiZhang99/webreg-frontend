const path = require('path');

const common = path.resolve(__dirname, 'src/components/Common');

module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
    resolve: {
      roots: [__dirname, common],
      modules: [common, 'node_modules'],
      extensions: ['', '.css', '.scss', '.js'],
      alias: {
        Common: common,
      },
    },
  },
};
