'use strict';
const express = require("express");
const morgan = require('morgan');
const cors = require("cors");
const config = require("./lib/config");
const router = require("./routes");
const app = express();


//passport
const passport = require("passport");

//settings

app.set("port", config.server.port);

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

require("./lib/passport")(passport);

//routes
app.use("/", router);

module.exports = app;