'use strict';

const mongoose = require("mongoose");
const app = require('./app');
const config = require("./lib/config");

mongoose.connect(config.database.dbUri,{ useNewUrlParser: true, useUnifiedTopology: true}, (err, db)=> {
    if(err) console.log(`Oops, error here: ${err}`)
    console.log(`Success, db: ${db.name}`)
})

const server = app.listen(app.get("port"), ()=>{
    console.log(`Server running on port: ${server.address().port}`)
})