const Koa = require('koa');
const serve = require('koa-static');
const app = new Koa();
app.use(serve('.'));

app.use(serve('../../public/index.html'));

app.listen(3000);