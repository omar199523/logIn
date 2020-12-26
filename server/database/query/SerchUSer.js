const e = require('express');
const dbConnection = require('../config/connection');

const serchUser= (email)=>{
    return dbConnection
    .query(`SELECT password FROM users WHERE email = $1`,[email]);
}