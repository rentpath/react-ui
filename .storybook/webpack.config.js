const path = require('path')

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.push({
    test: /\.css$/,
    include: [
      path.resolve(__dirname, '../'),
    ],
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[name]-[local]',
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
  })

  const jsConfig = {
    test: /\.js?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    options: {
      presets: [
        "es2015",
        "stage-0",
        "react"
      ],
      plugins: [
        "transform-runtime",
        "transform-decorators-legacy",
      ],
    }
  }

  // storybookBaseConfig.module.rules.push(jsConfig)

  storybookBaseConfig.resolve = {
    modules: [
      'node_modules',
      'packages',
    ]
  }

  return storybookBaseConfig
}
