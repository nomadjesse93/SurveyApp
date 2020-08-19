require('dotenv').config();

const express = require('express');
const User = require('../models/Users');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const router = express.Router();

//@route  POST api/auth
//@desc   Authenticate User and get token
//@access Public
router.post(
  '/',
  [
    body('email', 'Please include a valid email').isEmail(),
    body('password', 'Password is required').not().isEmpty()
  ],
  async (req, res) => {

    const { email, password } = req.body;

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
          return res.status(400).send({errors:errors.array()})
      }

    try {
      //Check if user exists

      let user = await User.findOne({ email });

      if (!user) {
       return res.status(401).json({ errors: [{ msg: 'Invalid credentials' }] });
      }
      //Match found user with password
     const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({ errors: [{ msg: 'Invalid credentials' }] });
      }


      //Return the json webtoken

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token, name: user.name});
        }
      );
    } catch (err) {
      console.error(err.message);
   return res.status(500).send('Server error');
    }
  }
);

module.exports = router;
