import React, { useState } from "react";
import axios from "axios";
import './StudentFeeDetails.css'; // Import CSS file

const StudentFeeDetails = () => {
  const [studentName, setStudentName] = useState("");
  const [feeOfMonth, setFeeOfMonth] = useState("");
  const [totalAmountPaid, setTotalAmountPaid] = useState("");
  const [datePaid, setDatePaid] = useState("");
  const [error, setError] = useState("");  // State to store error message
  const [success, setSuccess] = useState("");  // State to store success message

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!studentName || !feeOfMonth || !totalAmountPaid || !datePaid) {
      setError("All fields are required.");
      return;
    }

    if (isNaN(totalAmountPaid) || totalAmountPaid <= 0) {
      setError("Total Amount Paid must be a positive number.");
      return;
    }

    const newFeeRecord = { studentName, feeOfMonth, totalAmountPaid: Number(totalAmountPaid), datePaid };

    console.log("Sending data:", newFeeRecord);  // Log to check the data being sent

    try {
      const response = await axios.post("https://school-site-backend.onrender.com", newFeeRecord);
      setSuccess(response.data.message); // Display success message from the backend
      setError("");  // Clear any previous error message
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error);
      setError("Failed to add fee details. Please try again later.");
    }
  };

  return (
    <div className="student-fee-details-container">
      <h2 className="title">Add Fee Details</h2>

      {error && <div className="error-message">{error}</div>}  {/* Display error if any */}
      {success && <div className="success-message">{success}</div>}  {/* Display success message */}

      <form onSubmit={handleSubmit} className="fee-form">
  <div className="input-container">
    <label htmlFor="studentName">Student Name</label>
    <input
      type="text"
            id="studentName"
            autoComplete="off"
      className="input-field"
      value={studentName}
      onChange={(e) => setStudentName(e.target.value)}
    />
  </div>

  <div className="input-container">
    <label htmlFor="feeOfMonth">Fee of the Month</label>
    <input
            type="text"
            autoComplete="off"
      id="feeOfMonth"
      className="input-field"
      value={feeOfMonth}
      onChange={(e) => setFeeOfMonth(e.target.value)}
    />
  </div>

  <div className="input-container">
    <label htmlFor="totalAmountPaid">Total Amount Paid</label>
    <input
      type="number"
      id="totalAmountPaid"
      className="input-field"
      value={totalAmountPaid}
      onChange={(e) => setTotalAmountPaid(e.target.value)}
    />
  </div>

  <div className="input-container">
    <label htmlFor="datePaid">Date Paid</label>
    <input
      type="date"
      id="datePaid"
      className="input-field"
      value={datePaid}
      onChange={(e) => setDatePaid(e.target.value)}
    />
  </div>

  <button type="submit" className="submit-btn">Add Fee Details</button>
</form>

    </div>
  );
};

export default StudentFeeDetails;
