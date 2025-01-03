import React, { useState } from "react";
import axios from "axios";
import './StudentFeeDetails.css'; 

const StudentFeeDetails = () => {
  const [studentName, setStudentName] = useState("");
  const [feeOfMonth, setFeeOfMonth] = useState("");
  const [totalAmountPaid, setTotalAmountPaid] = useState("");
  const [datePaid, setDatePaid] = useState("");
  const [error, setError] = useState("");  
  const [success, setSuccess] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!studentName || !feeOfMonth || !totalAmountPaid || !datePaid) {
      setError("All fields are required.");
      return;
    }

    if (isNaN(totalAmountPaid) || totalAmountPaid <= 0) {
      setError("Total Amount Paid must be a positive number.");
      return;
    }

    const newFeeRecord = { studentName, feeOfMonth, totalAmountPaid: Number(totalAmountPaid), datePaid };

    console.log("Sending data:", newFeeRecord); 

    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL;
      
      if (!backendUrl) {
        setError("Backend URL is not defined in the .env file.");
        return;
      }

      const response = await axios.post(`${backendUrl}/api/students/add`, newFeeRecord);
      
      setSuccess(response.data.message); 
      setError("");  
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error);
      
      if (error.response && error.response.data) {
        setError(error.response.data.message || "Failed to add fee details. Please try again later.");
      } else {
        setError("Network error. Please try again later.");
      }
    }
  };

  return (
    <div className="student-fee-details-container">
      <h2 className="title">Add Fee Details</h2>

      {error && <div className="error-message">{error}</div>} 
      {success && <div className="success-message">{success}</div>}  

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
