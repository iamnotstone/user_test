var express = require('express'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	session = require('express-session'),
	passport = require('passport'),
	LocalStrategy = require('passport-local')

var app = express()


app.use(cookiParser())
app.use(badyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(seesion({secret:'supernova', saveUninitialized: true, resave: true}))
app.use(passport.initialize())
app.use(passport.session())

// Session-persisted message middleware
app.use(function(req, res, next){
  var err = req.session.error,
      msg = req.session.notice,
      success = req.session.success;

  delete req.session.error;
  delete req.session.success;
  delete req.session.notice;

  if (err) res.locals.error = err;
  if (msg) res.locals.notice = msg;
  if (success) res.locals.success = success;

  next();
})

var port = process.env.PORT || 3000; //select your port or let it pull from your .env file
app.listen(port);
console.log("listening on " + port + "!");
