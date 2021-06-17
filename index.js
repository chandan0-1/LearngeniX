const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const app = express();
const port = 8000;
const db = require("./config/mongoose");
const session = require("express-session")
const cookieParser = require("cookie-parser");
const flash = require('connect-flash');
const customWare = require("./config/middleware")

const path = require("path");

app.use(express.urlencoded());
app.use(cookieParser());

const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");

// setting up mongo-store
const mongoStore = require("connect-mongo")


// app.use(express.urlencoded());

app.use(expressEjsLayouts);

// extracting styles and script file from subpages to the head
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// Set up the view Engine
app.set("view engine", "ejs");
app.set("views","./views");

app.use(express.static("./asset"));

// Setting Mongo session
app.use(
  session({
    name: "LearnIO",
    secret: "testingKey2#",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 6000,
    },
    store: mongoStore.create(
      {
        mongoUrl: "mongodb://localhost/doubt_mgmt",
        autoRemove: "disabled",
      },
      function (err) {
        console.log(err || "connect mongodb setup OK");
      }
    ),
  })
);





app.use(passport.initialize());
app.use(passport.session());

// to set user associated with each doubt
app.use(passport.setAuthenticatedUser);

app.use(flash());
app.use(customWare.setflash);
// using Express router
app.use("/",require("./routes"))

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${port}`);
        }
    console.log(`Server is running on the port: ${port}`);  
});