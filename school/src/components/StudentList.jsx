import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentList.css';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/students`);
        setStudents(data); 
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/students/delete/${id}`);
      if (response.status === 200) {
        alert("Student details deleted successfully!");
        setStudents(students.filter((student) => student._id !== id));
      }
    } catch (error) {
      console.error("Error deleting student:", error);
      alert("Failed to delete student.");
    }
  };

  const filteredStudents = students.filter((student) =>
    student.studentName && student.studentName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="student-list-container">
      <h2>Student Fee Details</h2>

      <input
        type="text"
        placeholder="Search by student name"
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />

      <table className="student-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Fee of Month</th>
            <th>Total Amount Paid</th>
            <th>Date Paid</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student._id}>
              <td>{student.studentName}</td>
              <td>{student.feeOfMonth}</td>
              <td>Rs {student.totalAmountPaid}</td>
              <td>
                {new Date(student.datePaid).toLocaleDateString('en-GB')}{" "}
                {new Date(new Date(student.datePaid).toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })).toLocaleTimeString('en-US', { hour12: true })}

              </td>
              <td>
                <button
                  onClick={() => handleDelete(student._id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
