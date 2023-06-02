const path = require('path')
// import path from 'path'
export default {
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://192.168.121.66:8090',
        target: 'http://127.0.0.1:3000',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}
