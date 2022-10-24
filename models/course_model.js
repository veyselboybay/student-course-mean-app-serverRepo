import mongoose from "mongoose";

const Schema = mongoose.Schema;

let CourseSchema = new Schema({
  courseCode: String,
  courseName: String,
  section: String,
  semester: {
    type: String,
    validate: [
      (semester) => semester && semester.length > 0,
      "Semester field must be filled out",
    ],
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Course", CourseSchema);
