const { defineConfig } = require('@vue/cli-service')
const WorkerPlugin = require('worker-plugin');
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('ico')
      .test(/\.ico$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: '[name].[hash].[ext]',
        outputPath: 'assets/icons/', 
      });
  },
  configureWebpack: {
    plugins: [new WorkerPlugin()],
  },
})
