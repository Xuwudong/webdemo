const express = require('express');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');

const router = require('../routers/userRouter');

const sessionStore = require('connect-redis')(expressSession);

const app = express();

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.engine('.html', ejs.__express);
app.engine('.ejs', ejs.__express);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(expressSession({
  proxy: true,
  resave: false,
  saveUninitialized: false,
  name: 'demo',
  secret: 'demo',
  store: new sessionStore({
    host: '127.0.0.1',
    port: 6379,
    db: 2,
    password: ''
  }),
  cookie: {maxAge: 1000 * 60 * 60 * 7}
}));

app.use(router);

app.use(express.static(path.join(__dirname,'../public')));

async function start() {
  app.listen(8888, () => {
    console.log('localhost:8888 start up');
  });
  return await db.sequelize.sync({force: false}).catch((err) => {
    console.log(err);
    process.exit(1);
  });
}

exports.start = start;