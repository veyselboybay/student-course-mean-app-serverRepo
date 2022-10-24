import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const Schema = mongoose.Schema;

let StudentSchema = new Schema({
  studentNumber: {
    type: String,
    required: true,
  },
  firstName: String,
  lastName: String,
  program: String,
  favoriteCourse: String,
  favoriteTopic: String,
  address: String,
  city: String,
  phoneNumber: {
    type: String,
    validate: [
      (phoneNumber) => phoneNumber && phoneNumber.length === 10,
      "Phone Number must be 10 number length",
    ],
  },
  email: {
    type: String,
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
  },
  password: {
    type: String,
    validate: [
      (password) => password && password.length > 6,
      "Password must be at least 6 character",
    ],
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Student", StudentSchema);
