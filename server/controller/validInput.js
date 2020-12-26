const joi = require('joi');

module.exports = (object,collback)=>{
    const schema = joi.object({
        userName : joi.string().min(3).max(30),
        email: joi.string().email({minDomainSegments:2,tlds:{allow:['com','net']}}),
        password:joi.string().pattern(new RegExp('[a-zA-z0-9]{0,30}$')),
        confirmPassword:joi.ref('password'),
        typeOfUser:joi.valid('Sellor','Buyer')
    }).with('password', 'confirmPassword');
    const {value,err} = schema.validate(object);
    if(err !==undefined){
        collback(new Error(err));
    }else{
        collback(null,value);
    }
    
};