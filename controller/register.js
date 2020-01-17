const registerService = require('../service/register')
module.exports = {
    getRegister: async (ctx, next) => {
        await ctx.render('register/index');
    },
    regester: async (ctx, next) => {
        const data = ctx.request.body;
        await ctx.render('register/success', data);
    },
}