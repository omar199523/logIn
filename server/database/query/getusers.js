const dbConnection = require('../config/connection');

const getUers = ()=>{
    return dbConnection.query(`SELECT * FROM users`);
};

module.exports = getUers;