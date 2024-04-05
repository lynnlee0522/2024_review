const Router = require('koa-router');

const router = new Router({ prefix: "/" });

router.get('/', (ctx, next) => {
    ctx.response.body = "hello world";
});

module.exports = router;
