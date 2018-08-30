require('./global_regist');
const web = require('./servers/web');
Promise.resolve(web).then(app => {
  app.start();
});