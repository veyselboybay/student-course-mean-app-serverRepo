import Course from "../models/course_model.js";

//GET all courses
export const getAllCoursesController = (req, res) => {
  res.status(200).json({ success: true, userId: res.userId });
};

//POST new courses
export const postCourseController = async (req, res) => {
  //get the variables from req.body
  const { courseCode, section } = req.body;
  //check if the course already exist
  const isCourse = await res
    .status(200)
    .json({ success: true, msg: "you added new course." });
};
