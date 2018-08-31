const path = require('path')
const webpack = require('webpack')

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.push(
    {
      test: /\.(css|scss)$/,
      exclude: /\.global\.(css|scss)$/,
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
        },
        {
          loader: "sass-loader" // compiles Sass to CSS
        },
      ]
    },
    {
      test: /\.global\.(css|scss)$/,
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
        {
          loader: "sass-loader" // compiles Sass to CSS
        },
      ],
    },
  )

  storybookBaseConfig.resolve = {
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
