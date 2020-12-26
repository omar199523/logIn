const express = require('express');
const {join} = require('path');

const router = require('./controller/index');
const app =express();

app.use(express.static(join('__dirname','..','/public')));

// app.get('/',(req,res)=>{
//     res.send('hello warld');
// });
app.use(router);

app.set('PORT' , process.env.PORT|| 3000);
module.exports = app;

