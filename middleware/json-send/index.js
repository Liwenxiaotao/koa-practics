module.exports = () => {
    function render(json) {
        this.set('Content-Type', 'application/json');
        this.response.body = JSON.stringify(json);
    }

    return async (ctx, next) => {
        ctx.send = render.bind(ctx);
        await next();
    }
}