const express = require("express");
const { body, validationResult } = require("express-validator");
const auth = require("../middleware/auth");

const Survey = require("../models/Survey");

const Users = require("../models/Users");

const router = express.Router();

//@route  POST api/survey
//@desc   Create a survey
//@access Private

router.post(
  "/",
  [body("title", "Title is required!").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await Users.findById(req.body.user).select("-password");
      if (user) {
        const newSurvey = new Survey({
          user: user.id,
          title: req.body.title,
        });

        const survey = await newSurvey.save();

        res.json(survey);
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);
router.post("/question", async (req, res) => {
  try {
    const survey = await Survey.findOne({ user: req.body.user });
    if (survey) {
      survey.questions.push({
        question: req.body.question,
        one: req.body.one,
        two: req.body.two,
        three: req.body.three,
        four: req.body.four,
        five: req.body.five,
      });

      const question = await survey.save();

      res.json(question);
    } else {
      res.status(500).send("Survey doesn't Exist");
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
