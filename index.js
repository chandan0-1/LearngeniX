const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const app = express();
const port = 8000;
const db = require("./config/mongoose");
const cookieParser = require("cookie-parser");

const path = require("path");

app.use(express.urlencoded());
app.use(cookieParser());

const passport = require("passport");
const session = require("express-session")
const passportLocal = require("./config/passport-local-strategy");


// app.use(express.urlencoded());

app.use(expressEjsLayouts);

// extracting styles and script file from subpages to the head
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// Set up the view Engine
app.set("view engine", "ejs");
app.set("views","./views");

app.use(express.static("./asset"));


app.use(
  session({
    name: "chatio",
    // TODO changes before depylopment
    secret: "Hello",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 6000,
    },
    // store: new mongoStore(
    //   {
    //     mongooseConnection: db,
    //     autoRemove: "disabled",
    //   },
    //   function (err) {
    //     console.log(err || "connect mongodb setup OK");
    //   }
    // ),
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);
// using Express router
app.use("/",require("./routes"))

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${port}`);
        }
    console.log(`Server is running on the port: ${port}`);  
});