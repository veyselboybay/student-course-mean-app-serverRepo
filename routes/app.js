import express from "express";
import { homeController } from "../controllers/home_controller.js";
import {
  getAllCoursesController,
  postCourseController,
  deleteCourseController,
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

router.route("/courses/:id").post(deleteCourseController);
export default router;
