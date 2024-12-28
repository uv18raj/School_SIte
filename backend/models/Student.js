const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  feeOfMonth: { type: String, required: true },
  totalAmountPaid: { type: Number, required: true },
  datePaid: { type: Date, required: true },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
