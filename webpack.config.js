module.exports = {
  entry: __dirname + '/client/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            'plugins': [
              [
                '@babel/plugin-proposal-class-properties',
                {
                  'loose': true
                }
              ]
            ]
          },
        },
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  },
  mode: 'development'
};
