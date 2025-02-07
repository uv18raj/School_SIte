import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StudentList.css";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/students`);
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this record?")) return;

    try {
      const response = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/students/delete/${id}`);
      if (response.status === 200) {
        setStudents(students.filter((student) => student._id !== id));
        alert("Student details deleted successfully!");
      }
    } catch (error) {
      console.error("Error deleting student:", error);
      alert("Failed to delete student.");
    }
  };

  const filteredStudents = students.filter((student) =>
    student.studentName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="student-list-container">
      <h2>Student Fee Details</h2>

      <input
        type="text"
        placeholder="Search by student name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {loading ? (
        <p>Loading student data...</p>
      ) : (
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
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student._id}>
                  <td>{student.studentName}</td>
                  <td>{student.feeOfMonth}</td>
                  <td>Rs {student.totalAmountPaid}</td>
                  <td>{new Date(student.datePaid).toLocaleDateString("en-GB")}</td>
                  <td>
                    <button onClick={() => handleDelete(student._id)} className="delete-btn">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No students found</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentList;
