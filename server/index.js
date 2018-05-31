import koa from 'koa';
import mongoose from 'mongoose';
import koaRouter from 'koa-router';

const port = 3003;
const app = koa();
const URL = 'mongodb://'

const Model = mongoose.model('User', mongoose.Schema({}));

const options = {
  socketOptions: {
    socketTimeoutMS: 0,
    keepAlive: true
  },
  auto_reconnect: true,
  reconnectTries: Number.MAX_VALUE
}

mongoose.connect(URL, {
  server: options,
  replset: options
});

const router = new koaRouter({
  prefix: '/test'
});

router.get('/data', function *() {
  const data = yield Model.findOne({});
  console.log('data', data);
  this.body = data;
});

router.get('/state', function *() {
  const states = {
    mongo: mongoose.connection.readyState
  };
  this.assert(mongoose.connection.readyState !== 0, 500, states);
  this.body = states;
});

app.use(router.routes());

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});