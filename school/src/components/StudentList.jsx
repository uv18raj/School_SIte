import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentList.css';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch students data on component mount
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/students`);
        setStudents(data); // Update students state with fetched data
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  // Handle search term change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle student deletion
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/students/delete/${id}`);
      if (response.status === 200) {
        alert("Student details deleted successfully!");
        // Remove the deleted student from the list
        setStudents(students.filter((student) => student._id !== id));
      }
    } catch (error) {
      console.error("Error deleting student:", error);
      alert("Failed to delete student.");
    }
  };

  // Filter students based on search term
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
                {new Date(student.datePaid).toLocaleTimeString('en-US', { hour12: false })}
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
