const mongoose = require("mongoose");


const mongo = async () => {
  try {
    return await mongoose.connect(process.env.DB_URI||"mongodb+srv://Mirziyod:admin@newcluster.x6dzdhl.mongodb.net/exam");
  } catch (err) {
    console.log(err);
  }
};

module.exports = mongo;
