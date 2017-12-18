const router = require('koa-router')();
const Bug = require('../app/model/bug');

router.prefix('/api');

router.get('/', async function (ctx, next) {
    var bugs = await Bug.findAll();
    ctx.response.type = 'application/json';
    ctx.body = {
        bugs: bugs
    };
});

router.post('/', async function (ctx, next) {
    var new_bug = new Bug(
        ctx.request.body.id,
        ctx.request.body.device,
        ctx.request.body.info
    );
    var ok = await Bug.add(new_bug);
    ctx.response.type = 'application/json';
    ctx.body = {
        status: ok
    };
});

router.get('/:id', async function (ctx, next) {
    var bugs = await Bug.findById(ctx.params.id);
    ctx.response.type = 'application/json';
    ctx.body = {
        bugs: bugs
    };
});

module.exports = router;
