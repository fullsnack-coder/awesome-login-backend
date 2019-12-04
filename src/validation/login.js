'use strict';

const isEmpty = require("is-empty");
const Validator = require("validator");

const validateLoginInput = (data) => {
    let errors = {};

    data.email = !isEmpty(data.email)? data.email : "";
    //console.log('Esta es la verdad: '+ isEmpty(data.email));
    data.password = !isEmpty(data.password)? data.password : "";

    if(Validator.isEmpty(data.email)){
        errors.email = "Email field is required";
    }
    if(!Validator.isEmail(data.email)){
        errors.email = "Email invalid";
    }
    if(Validator.isEmpty(data.password)){
        errors.password = "Password field is required";
    }
    if(!Validator.isLength(data.password, {min: 6})){
        errors.password = "Password must be at 6 characteres minimun";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

module.exports = validateLoginInput;
