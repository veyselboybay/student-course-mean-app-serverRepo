// export const getRegisterPage = (req, res) => {
//   console.log("getRegisterpage");
// };
import Student from "../models/student_model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerNewStudent = async (req, res) => {
  const {
    studentNumber,
    // firstName,
    // lastName,
    // program,
    // favoriteCourse,
    // favoriteTopic,
    // address,
    // city,
    // phoneNumber,
    // email,
    password,
  } = req.body;

  //check if student exists?
  const exists = await Student.findOne({ studentNumber: studentNumber });
  if (exists) {
    return res.json("student already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);
  const student = new Student({ ...req.body, password: hashedPass });
  await student.save();
  //Set up jwt token
  const token = jwt.sign({ _id: student._id }, process.env.SECRET_KEY);
  await res.cookie("auth_token", token, {
    httpOnly: true,
  });
  return res.status(200).json({ success: true, msg: "User registered!" });
};

// export const getLoginPage = (req, res) => {
//   console.log("get login page");
// };
export const postLoginPage = async (req, res) => {
  const { studentNumber, password } = req.body;
  //check if the user exists
  const isUser = await Student.findOne({ studentNumber: studentNumber });
  if (!isUser) {
    return res
      .status(401)
      .json({ success: false, msg: "User does not exist!" });
  }
  //check if password is correct
  const validPassword = await bcrypt.compare(password, isUser.password);
  if (!validPassword) {
    return res
      .status(401)
      .json({ success: false, msg: "Student No or Password is invalid!" });
  }
  //sign jwt token and set cookies
  const token = await jwt.sign({ _id: isUser._id }, process.env.SECRET_KEY);
  res.cookie("auth_token", token, { httpOnly: true });
  //return user
  res.status(200).json({ success: true, msg: "Logged In user: " + isUser._id });
};

export const postLogoutPage = (req, res) => {
  res.clearCookie("auth_token");
  return res.json("Logged out user: " + res.userId);
};
