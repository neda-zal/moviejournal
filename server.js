// jshint esversion:10

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const handlebars = require('express-handlebars');
const Handlebars = require('handlebars');
const cookieParser = require('cookie-parser');

const app = express();
const jsonParser = bodyParser.json();
// for 304
app.disable('etag');

app.use(bodyParser.json());
const router = express.Router();
app.use(morgan('dev'));

// use css and other static files
app.use(express.static('assets'));
express.static( 'path', { dotfiles: 'allow' } );
app.use(express.static(process.cwd() + '/views'));
app.use(express.static(process.cwd() + '/assets'));
app.use(express.static(path.join(__dirname, '/')));

// routes
app.use(require('./routes/home'));
app.use(require('./routes/upcoming'));
app.use(require('./routes/registration'));
app.use(require('./routes/toprated'));
app.use(require('./routes/results'));
app.use(require('./routes/genre'));
app.use(require('./routes/profile'));
app.use(require('./routes/index'));
app.use(require('./routes/upcomingmovies'));
app.use(require('./routes/topratedmovies'));
app.use(require('./routes/genremovies'));
app.use(require('./routes/searchresults'));

// session
app.use(session({
    secret: 'topsecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: 600000
    }
}));
app.use(cookieParser());

let {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars({
	layoutsDir: __dirname + '/views/layout',
	handlebars: allowInsecurePrototypeAccess(Handlebars),
  helpers: {
    math: function(lvalue, operator, rvalue) {lvalue = parseFloat(lvalue);
        rvalue = parseFloat(rvalue);
        return {
            "+": lvalue + rvalue,
            "-": lvalue - rvalue,
            "*": lvalue * rvalue,
            "/": lvalue / rvalue,
            "%": lvalue % rvalue
        }[operator];
  },
  concat: function(path) {
    return "https://image.tmdb.org/t/p/w200" + path;
  },
  imdburl: function(path) {
    return "https://www.imdb.com/title/" + path;
  }
}}));

// check log-in users
const sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect('/home');
    } else {
        next();
    }
};

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log('server started on port ' + PORT));
