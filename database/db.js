require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI = process.env.MONGOURI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log('Mongodb connected...');
  } catch (err) {
    console.log(err.message);
    //exit process on failure
    process.exit(1);
  }
};

module.exports = connectDB;
