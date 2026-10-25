// Jest 用 (アプリのビルドは Vite が行う)
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      { targets: { node: "current" } }
    ]
  ]
}
