const Router = require('koa-router');
const registerCotroller = require('./controller/register');
const updateFile = require('./controller/update');
const multer = require('koa-multer');
const fs = require('fs');
const path = require('path');
const router = new Router();

// 上传文件
const update = multer({
    dest: 'update/'
})

const types = update.single('avatar');

module.exports = (app) => {
    router.get('/', registerCotroller.getRegister);

    router.post('/', registerCotroller.regester);

    router.get('/update', updateFile.updateIndex);

    router.post('/profile', types, async (ctx, next) => {
        const {
            originalname,
            path: out_path,
            mimetype
        } = ctx.req.file;
        // 重命名
        let newName = out_path + path.parse(originalname).ext;
        let err = fs.renameSync(out_path, newName);
        if (err) {
            ctx.send(err);
        } else {
            ctx.response.body = '<h1>update success!!!</h1>'
        }
    });  // 文件上传请求路由

    app.use(router.routes()).use(router.allowedMethods);
}