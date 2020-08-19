const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../models/Users');


//@route  POST api/users
//@desc   Register User
//@access Public
router.post(
  '/',
  [
    body('first_Name', 'First name is required!')
      .not()
      .isEmpty(),
      body('last_Name', 'Last name is required!')
          .not()
          .isEmpty(),
    body('email', 'Please include a valid email').isEmail(),
    body(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6, max: 18 })
  ],

    async (req, res) => {

        const { first_Name,last_Name, email, password } = req.body;

        try {
          //Check if email is already in use

          let user = await User.findOne({ email });

          if (user) {
            return res.json({ errors: [{ msg: 'User already exists' }] });
          }

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).send({errors:errors.array()})
            }

          user = new User({ first_Name,last_Name, email, password });

          const salt = await bcrypt.genSalt(12);

          user.password = await bcrypt.hash(password, salt);


            await user.save();

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
                res.json({ token });
              }
          );
        } catch (error) {

          console.error(error.message);
          res.status(500).send('Server error');
        }
      }



);

module.exports = router;
