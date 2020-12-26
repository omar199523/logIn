/* eslint-disable no-undef */
const {Pool} =require('pg');
require('dotenv').config({path:'./config.env'});

let dbUrl = "";

if (process.env.NODE_ENV === "test") {
    dbUrl = process.env.TEST_DB_URL;
  } else {
    dbUrl = process.env.DATABASE_URL;
  }
const options = {
    connectionString:dbUrl,
    ssl:process.env.NODE_ENV==="production"
};
module.exports = new Pool(options);