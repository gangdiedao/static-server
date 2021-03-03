# Featrue List

* 静态资源部署、访问
* htaccess 路由重写（仿apache服务器的.htaccess功能，实现 SPA 路由映射）
* 静态资源发布版本管理（待定）

# 技术选型

* web服务：koa
* 路由：koa-router
* 静态服务：koa-static
* 路径匹配：path-match
* 文件发送：koa-send
* 文件监听：chokidar

# 开发思路

### 静态资源访问
1. 通过 koa 搭建 web 服务
2. 通过 koa-static 中间件将 public 目录设置为静态资源目录

``` js
const Koa = require('koa')
const staticServe = require('koa-static')

const app = new Koa()

app.use(staticServe('./public'))

```

### htaccess 路由重写（SPA 路由映射）

1. 使用 chokidar 模块监听 public 文件夹下的所有 htaccess.json 文件新增、改变事件
2. 当事件触发时加载触发该事件的 htaccess.json 文件
3. 读取 root 字段，通过 koa-router + koa-send 创建静态资源访问路由，htaccess.json 文件所在路径为 koa-send 的 root 路径
4. 读取 rewriters 字段，通过 koa-router + koa-send 循环重写路由

``` js
const Router = require('koa-router')
const chokidar = require('chokidar')
const path = require('path')

const router = new Router()

let htaccessGlob = [path.resolve(__dirname, path), '**/htaccess.json'].json('')
chokidar.watch(htaccessGlob).on('change', (htaccessPath) => {
    console.log(htaccessPath)           // htaccess.json 路径

    var htaccess = require(htaccessPath)
    console.log(htaccess.root)          // htaccess root 配置
    console.log(htaccess.rewriters)     // htaccess rewriters 配置

    // 通过 koa-router + koa-send 创建静态资源访问路由
})

// use router
app.use(router.routes())
app.use(router.allowedMethods())

```

# 参考项目
* [koa-static](https://github.com/koajs/static)
* [koa-static2](https://github.com/Secbone/koa-static2)
* [koa-serve](https://github.com/adamkdean/koa-serve)
* [koa-static-server](https://github.com/pkoretic/koa-static-server)

