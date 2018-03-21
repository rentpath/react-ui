const path = require('path')
const webpack = require('webpack')

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.push(
    {
      test: /\.css$/,
      exclude: /\.global\.css$/,
      include: [
        path.resolve(__dirname, '../'),
      ],
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[path]-[local]',
            importLoaders: 1,
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            plugins: [
              require('autoprefixer')(),
            ],
          },
        }
      ]
    },
    {
      test: /\.global\.css$/,
      include: [
        path.resolve(__dirname, '../'),
      ],
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: false,
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            plugins: [
              require('autoprefixer')(),
            ],
          },
        },
      ],
    },
    {
      test: /\.ts(x?)$/,
      use: "ts-loader",
      include: [
        path.resolve(__dirname, '../'),
      ],
      exclude: /node_modules/,
    }
  )

  storybookBaseConfig.resolve = {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
    modules: [
      'node_modules',
      'packages',
    ]
  }

  if (configType === 'PRODUCTION') {
    // Removing uglification until we figure out a fix for that.
    storybookBaseConfig.plugins.pop();
  }

  return storybookBaseConfig
}
