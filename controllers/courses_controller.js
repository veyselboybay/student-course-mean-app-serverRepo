import Course from "../models/course_model.js";

//GET all courses
export const getAllCoursesController = async (req, res) => {
  const allCourses = await Course.find({});
  res
    .status(200)
    .json({ success: true, userId: res.userId, courses: allCourses });
};

//POST new courses
export const postCourseController = async (req, res) => {
  //get the variables from req.body
  const { courseCode, section } = req.body;
  //check if the course already exist
  const isCourse = await Course.findOne({ courseCode: courseCode });
  // console.log(isCourse);
  // check if the course is already exist with the specified section
  if (isCourse && section === isCourse.section) {
    return res.status(400).json({
      success: false,
      msg: "you already have this course in specified section",
    });
  }
  const newCourse = await Course(req.body);
  //SAVE THE COURSE
  await newCourse.save();
  res
    .status(200)
    .json({ success: true, msg: "you added new course.", course: newCourse });
};

// delete course

export const deleteCourseController = async (req, res) => {};
