const path = require('path');
const Koa = require('koa');
const app = new Koa();

app.use(require('koa-static')(path.join(__dirname, 'public')));
app.use(require('koa-bodyparser')());

const Router = require('koa-router');
const router = new Router();

const resolves = []

router.get('/subscribe', async (ctx, next) => {
    ctx.body = await new Promise((resolve) => {
        resolves.push(resolve)
    })
});

router.post('/publish', async (ctx, next) => {
    for (let resolve of resolves) {
        if (ctx.request.body.message.length) resolve(ctx.request.body.message)
    }
    ctx.body = null
});

app.use(router.routes());

module.exports = app;
