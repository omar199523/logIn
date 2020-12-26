const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const dbBuild = require('../database/config/build');
const getUers = require('../database/query/getusers');
const validInpt = require('./validInput');
const postUser = require('../database/query/postUser');

dbBuild();



router.post('/logIn',(req,res)=>{
    let {email,password} = req.body;
    validInpt({email,password},(err,value)=>{
        if(err) console.log(err);
        res.redirect('/');
        console.log(value);
    });
    
});
router.post('/signUp',(req,res)=>{
    let {userName,email,password,confirmPassword,typeOfUser} = req.body;
    validInpt({userName,email,password,confirmPassword,typeOfUser},(err,value)=>{
        if(err) console.log(err);
        const {userName,email,password,typeOfUser} = value;
        bcrypt.genSalt(10,(err,salt)=>{
            if(err) console.log(err);
            bcrypt.hash(password,salt,(err,hash)=>{
                if(err)console.log(err);
                
                
                postUser({userName,email,password:hash,typeOfUser})
                .then(()=>{
                    console.log('sucessful post user');
                    res.redirect("/");
                })
                .catch(err=>console.log('error in post user',err));
            });
        });
    });

});
router.get('/getUser',(req,res)=>{
    getUers()
    .then(result=>res.json(result))
    .catch(err=>console.log(err));
});

module.exports =router;