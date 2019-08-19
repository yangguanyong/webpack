var koa = require('koa')
var fs = require('fs')
var path = require('path')
const proxy = require('koa-proxies')
var history = require('connect-history-api-fallback');
var Router = require('koa-router');
var router = new Router();
var app = new koa()

const config = {
  apiHost: 'https://getman.cn/mock',
  // apiHost: 'https://www.talebase.com'
}

app.use(proxy('/api', {
  target: config.apiHost,
  changeOrigin: true,
  logs: false
}))

app.listen(3020)

