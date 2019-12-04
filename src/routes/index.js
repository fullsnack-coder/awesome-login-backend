"use strict";

const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../db/models/User");
const config = require("../lib/config");

//Load the input validation
const validateLogin = require("../validation/login");
const validateRegister = require("../validation/register");

router.get("/", (req, res) => {
  res.redirect("/login");
});

router.post("/register", async (req, res) => {
  const { errors, isValid } = validateRegister(req.body);
  if (!isValid) {
    return res.status(500).json(errors);
  }
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res.status(400).json({ email: "The user already exist" });
    else {
      const user = new User();
      user.name = req.body.name;
      user.email = req.body.email;
      user.password = user.encryptPassword(req.body.password);

      try {
        const newUser = await user.save();
        return res.status(200).json(newUser);
      } catch (error) {
        console.log(`Sorry, internal error: ${error}`);
        res.status(500).json({ message: `Sorry, internal error: ${error}` });
      }
    }
  } catch (error) {
    console.log(":( Error: ", error);
    return res.status(500).json({ message: "Sorry :( internal error" });
  }
});

router.post("/login", async (req, res) => {
  const { errors, isValid } = validateLogin(req.body);
  if (!isValid) {
    console.log({errors})
    return res.status(400).json({errors});
  } else {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        //console.log(`No user`)
        return res.status(400).json({ errors: {email: "No user found"} });
      } else {
        const isMatch = user.comparePassword(req.body.password, user.password);
        if (isMatch) {
            const payload = {
                id: user._id,
                name: user.name
            };

            jwt.sign(payload, config.passport.secretOrKey, {
                expiresIn: 60*60*24
            }, (err, token)=> {
                if(err) res.status(500).json({ message: "Internal error"});
                else {
                    res.json({
                        success: true,
                        token: "Bearer "+token
                    })
                }
            })
        }

        else {
            return res.status(400).json({ errors: {password: "Password incorrect"}});
        }
      }
    } catch (error) {}
  }
});

module.exports = router;
