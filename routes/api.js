const router = require('koa-router')();
const send = require('koa-send');
// const Bug = require('../app/model/bug');

router.prefix('/api');

// router.get('/', async function (ctx, next) {
//     var bugs = await Bug.findAll();
//     ctx.response.type = 'application/json';
//     ctx.body = {
//         bugs: bugs
//     };
// });
//
// router.post('/', async function (ctx, next) {
//     var new_bug = new Bug(
//         ctx.request.body.id,
//         ctx.request.body.device,
//         ctx.request.body.info
//     );
//     var ok = await Bug.add(new_bug);
//     ctx.response.type = 'application/json';
//     ctx.body = {
//         status: ok
//     };
// });
//
// router.get('/:id', async function (ctx, next) {
//     var bugs = await Bug.findById(ctx.params.id);
//     ctx.response.type = 'application/json';
//     ctx.body = {
//         bugs: bugs
//     };
// });

router.get('/apk', async function (ctx) {
    // 为了方便演示，这里直接下载index页面 Topspeed_v1.0.0_201804081816.apk
    var fileName = 'app-debug.apk';
    // Set Content-Disposition to "attachment" to signal the client to prompt for download.
    // Optionally specify the filename of the download.
    // 设置实体头（表示消息体的附加信息的头字段）,提示浏览器以文件下载的方式打开
    // 也可以直接设置 ctx.set("Content-disposition", "attachment; filename=" + fileName);
    ctx.attachment(fileName);
    await send(ctx, fileName, {root: process.cwd() + '/public'});
});

module.exports = router;
