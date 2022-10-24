import mongoose from "mongoose";

const db = () => {
  try {
    mongoose.connect(process.env.DB_CONNECTION, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("DB Connection Successful.");
    });
  } catch (error) {
    console.log(error);
  }
};

export default db;
