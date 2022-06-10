// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkgJson = require('./package.json')

const version = process.env.CI_COMMIT_TAG || pkgJson.version

module.exports = {
  devServer: {
    port: 8088,
    disableHostCheck: true,
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3000/',
    //     changeOrigin: true,
    //     // pathRewrite: {
    //     //   '^api': ''
    //     // }
    //   }
    // }
  },
  chainWebpack: config => {
    config.plugin('html').tap((options) => {
      options[0].version = version
      return options
    })

    config.optimization.minimizer('terser').tap((args) => {
      // 注释console.*
      args[0].terserOptions.compress.drop_console = true
      // remove debugger
      args[0].terserOptions.compress.drop_debugger = true
      // 移除 console.log
      args[0].terserOptions.compress.pure_funcs = ['console.log']
      // 去掉注释 如果需要看chunk-vendors公共部分插件，可以注释掉就可以看到注释了
      args[0].terserOptions.output = {
        comments: false
      }
      return args
    })
  }
}
