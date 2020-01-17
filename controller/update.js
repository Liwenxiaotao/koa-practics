module.exports = {
    updateIndex: async (ctx, next) => {
        await ctx.render('update_file/index');
    },
}