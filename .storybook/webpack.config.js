const path = require('path')

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
  )

  storybookBaseConfig.resolve = {
    modules: [
      'node_modules',
      'packages',
    ]
  }

  return storybookBaseConfig
}
