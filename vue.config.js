module.exports = {
  devServer: {
    // host: 'localhost',
    host: "0.0.0.0",
    port: 8080, // 端口号
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器  http://172.11.11.22:8888/rest/XX/
    hotOnly: true, // 热更新
    // proxy: 'http://localhost:8000'   // 配置跨域处理,只有一个代理
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3000",
        ws: true,
        changOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
