const path = require('path')

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.push({
    test: /\.css$/,
    include: [
      path.resolve(__dirname, '../'),
      /dist\/flexboxgrid.css/,
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

  storybookBaseConfig.resolve = {
    modules: [
      'node_modules',
      'packages',
    ]
  }

  return storybookBaseConfig
}
