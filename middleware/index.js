const Path = require('path');
const Serve = require('koa-static');
const BodyParser = require('koa-bodyparser');
const nunjucks = require('koa-nunjucks-2');
const jsonSend = require('./json-send');

module.exports = (app) => {
    app.use(Serve(Path.join(__dirname, './public'), {
        maxage: 30 * 24 * 60 * 60 * 1000,
    }));

    app.use(nunjucks({
        ext: 'html',
        path: Path.join(__dirname, '../views'),
        nunjucksConfig: {
            trimBlocks: true
        }
    }))
    app.use(BodyParser());
    app.use(jsonSend());
}