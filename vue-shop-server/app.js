const express = require('express')
// 导入包
const compression = require('compression');
const https = require('https');
const fs = require('fs');
const options = {
    cert: fs.readFileSync('./full_chain.pem'),
    key: fs.readFileSync('./private.key')
}

// 创建 web 服务器
const app = express()
// 启用中间件
app.use(compression());
// 托管静态资源
app.use(express.static('./dist'))
// 启动 web 服务器
// app.listen(80, () => {
//     console.log('web server running at http://127.0.0.1')
// })
https.createServer(options, app).listen(443);