"use strict";

const Validator = require("validator");
const isEmpty = require("is-empty");

const validateRegisterInput = data => {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.repeatpassword = !isEmpty(data.repeatpassword)
    ? data.repeatpassword
    : "";

  //Test the name
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  //Test the email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "The email is invalid...";
  }

  //Password test
  if (Validator.isEmpty(data.password)) {
    errors.password = "The password field is required";
  }
  if (Validator.isEmpty(data.repeatpassword)) {
    errors.repeatpassword = "The repeat password is required";
  }
  if(!Validator.isLength(data.password, {min: 6})){
    errors.password = "The password must be at 6 characters";
  }
  if(!Validator.equals(data.password, data.repeatpassword)){
    errors.password = "Passwords don't match";
  }
  return {
      errors,
      isValid: isEmpty(errors)
  }

};

module.exports = validateRegisterInput;
