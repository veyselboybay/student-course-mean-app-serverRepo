import express from "express";
const router = express.Router();

import {
  registerNewStudent,
  postLoginPage,
  postLogoutPage,
} from "../controllers/auth_controller.js";

//Register GET/POST
router.route("/register").post(registerNewStudent);

//Login a student
router.route("/login").post(postLoginPage);

// Logout
router.route("/logout").post(postLogoutPage);

export default router;
