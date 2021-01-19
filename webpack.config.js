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
      {
        test: /\.css$/,
<<<<<<< HEAD
        use: [
          'style-loader', 'css-loader'
        ]
      }
=======
        use: ['style-loader', 'css-loader'],
      },
>>>>>>> 413e6a51482077162de0b602ce81f7af9f86cdd1
    ],
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist',
  },
  mode: 'development',
};
