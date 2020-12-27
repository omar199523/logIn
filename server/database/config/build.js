const {join} =require('path');
const {readFileSync} = require('fs');
const dbConection = require('./connection');

// eslint-disable-next-line no-undef
const sql =readFileSync(join(__dirname,"build.sql")).toString();

const dbBuild =()=>{
    return dbConection
    .query(sql)
    .then(()=>console.log("sucessful"))
    .catch(err=>console.log(err));
};

// module.exports =dbBuild;