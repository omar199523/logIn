const { object } = require('joi');
const dbConnection = require('../config/connection');

module.exports = (object)=>{
    const {userName,email,password,typeOfUser} =object;
    return dbConnection
    .query(`INSERT INTO users(userName,email,password,typeOfUser) VALUES($1,$2,$3,$4)`,[userName,email,password,typeOfUser]);
};