const Koa = require('koa');
const router = require('./router');
const middleWare = require('./middleware')

const app = new Koa();

// 挂载中间件
middleWare(app);

// 路由
router(app);

app.listen(8080, () => {
    console.log('server is running!')
})