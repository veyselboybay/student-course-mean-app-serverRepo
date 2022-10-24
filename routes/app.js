import express from "express";
import { homeController } from "../controllers/home_controller.js";
import {
  getAllCoursesController,
  postCourseController,
} from "../controllers/courses_controller.js";

const router = express.Router();

/**
 * METHOD: GET
 * PURPOSE: Home Route
 */
router.route("/").get(homeController);

//courses
router
  .route("/courses")
  .get(getAllCoursesController)
  .post(postCourseController);
export default router;
