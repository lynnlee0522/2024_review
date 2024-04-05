const Koa = require('koa');
const { createServer } = require('node:http');
const { Server } = require('socket.io');

const userRouter = require('./router/user');
const app = new Koa();
const server = createServer(app);


const io = new Server(server);

io.on('connection', (socket) => {
    console.log('a user connected');
});


app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(8000, () => {
  console.log("koa初体验服务器启动成功~");
});
