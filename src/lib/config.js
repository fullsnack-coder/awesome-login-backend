'use strict';
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    server: {
        port: process.env.PORT || 3002
    },
    database: {
        dbUri: process.env.MONGO_URI
    },
    passport: {
        secretOrKey: process.env.SECRET
    }
}