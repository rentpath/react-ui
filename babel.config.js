module.exports = {
  presets: [
    ["@babel/preset-env", {
      targets: {
        browsers: [">0.25%", "not op_mini all"],
        node: "current"
      }
    }],
    "@babel/preset-react"
  ],
  env: {
    es: {
      presets: [
        ["@babel/preset-env", {
          modules: false,
          targets: {
            browsers: [">0.25%", "not op_mini all"],
            node: "current"
          }
        }],
        "@babel/preset-react"
      ],
      plugins: [
        "@babel/plugin-transform-runtime",
        ["@babel/plugin-proposal-decorators", {
          legacy: true
        }],
        "@babel/plugin-proposal-class-properties",
        "dynamic-import-webpack"
      ],
      "ignore": [
        "**/__tests__"
      ]
    },
    cjs: {
      plugins: [
        "@babel/plugin-transform-runtime",
        ["@babel/plugin-proposal-decorators", {
          legacy: true
        }],
        "@babel/plugin-proposal-class-properties",
        "dynamic-import-webpack"
      ],
      "ignore": [
        "**/__tests__"
      ]
    },
    test: {
      plugins: [
        ["@babel/plugin-proposal-decorators", {
          legacy: true,
        }],
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        "@babel/plugin-proposal-export-default-from",
        "dynamic-import-node"
      ]
    }
  }
}
