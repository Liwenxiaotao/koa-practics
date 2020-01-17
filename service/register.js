module.exports = {
    async renderRegister(ctx) {
        ctx.body = 111111;
        await ctx.render('register/index');
    },
    async renderSuccess(ctx, data) {
        await ctx.render('register/success', data);
    }
}