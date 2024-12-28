const express = require("express");
const Student = require("../models/Student");
const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    console.log("Request data:", req.body);

    const { studentName, feeOfMonth, totalAmountPaid, datePaid } = req.body;

    const newFeeRecord = new Student({
      studentName,
      feeOfMonth,
      totalAmountPaid,
      datePaid,
    });

    await newFeeRecord.save();
    return res.status(201).json({ message: "Fee details added successfully" });
  } catch (error) {
    console.error("Error saving data:", error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
});

router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch student fee details" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({ message: "Student fee record not found" });
    }

    res.status(200).json({
      message: "Student fee details deleted successfully",
      deletedRecord: student,
    });
  } catch (error) {
    console.error("Error deleting student fee details:", error);
    res.status(500).json({
      message: "Failed to delete student fee details",
      error: error.message,
    });
  }
});

module.exports = router;
