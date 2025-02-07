import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./GenerateReportCard.css";

const GenerateReportCard = () => {
  const [studentName, setStudentName] = useState("");
  const [className, setClassName] = useState("");
  const [examName, setExamName] = useState("");
  const [session, setSession] = useState("");
  const [address, setAddress] = useState("");
  const [subjects, setSubjects] = useState([{ name: "", marks: "" }]);

  // Function to calculate total marks and percentage
  const calculateTotalAndPercentage = () => {
    let totalMarks = 0;
    let validSubjects = 0;

    subjects.forEach((subject) => {
      const marks = parseInt(subject.marks, 10);
      if (!isNaN(marks)) {
        totalMarks += marks;
        validSubjects++;
      }
    });

    const percentage = validSubjects > 0 ? (totalMarks / (validSubjects * 100)) * 100 : 0;
    return { totalMarks, percentage };
  };

  // Function to generate report card
  const generateReportCard = () => {
    if (!studentName || !className || !examName || !session || !address) {
      alert("Please fill in all the fields before generating the report card.");
      return;
    }

    const doc = new jsPDF();

    // School Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(56, 96, 178);
    doc.text("Kaizen Pre-Play School", 105, 20, { align: "center" });

    // Address & Contact Info
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text("Mohanpur, Giridih, Jharkhand, PIN - 815311", 105, 30, { align: "center" });
    doc.text("Phone: +91 7909019167", 105, 35, { align: "center" });

    // Title
    doc.setFontSize(18);
    doc.setTextColor(255, 87, 34);
    doc.text("Student Report Card", 105, 50, { align: "center" });

    // Date
    const currentDate = new Date().toLocaleDateString();
    doc.setFontSize(12);
    doc.setTextColor(50, 50, 50);
    doc.text(`Date: ${currentDate}`, 105, 60, { align: "center" });

    // Student Information Box
    const infoBoxY = 70;
    doc.setDrawColor(0, 0, 0);
    doc.rect(20, infoBoxY, 170, 40);

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text("Student Name:", 25, infoBoxY + 10);
    doc.text("Class:", 25, infoBoxY + 20);
    doc.text("Exam Name:", 25, infoBoxY + 30);

    doc.text("Session:", 120, infoBoxY + 10);
    doc.text("Address:", 120, infoBoxY + 20);

    // Fill in the student data
    doc.setFont("helvetica", "normal");
    doc.text(studentName, 60, infoBoxY + 10);
    doc.text(className, 60, infoBoxY + 20);
    doc.text(examName, 60, infoBoxY + 30);
    doc.text(session, 150, infoBoxY + 10);

    const addressLines = doc.splitTextToSize(address, 40);
    addressLines.forEach((line, index) => {
      doc.text(line, 150, infoBoxY + 20 + index * 5);
    });

    // Subjects Table
    const { totalMarks, percentage } = calculateTotalAndPercentage();
    doc.autoTable({
      startY: infoBoxY + 50,
      head: [["Subject", "Marks"]],
      body: subjects.map((subject) => [
        subject.name || "-",
        subject.marks || "-",
      ]),
      theme: "grid",
      margin: { top: 10, left: 20, right: 20 },
    });

    // Total Marks and Percentage
    const xPosition = 20;
    const yPosition = doc.lastAutoTable.finalY + 10;
    doc.setFont("helvetica", "bold");
    doc.text("Total Marks: ", xPosition, yPosition);
    doc.text(totalMarks.toString(), xPosition + 28, yPosition);
    doc.text("Percentage: ", xPosition, yPosition + 10);
    doc.text(`${percentage.toFixed(2)}%`, xPosition + 28, yPosition + 10);

    // Signatures
    const footerY = doc.internal.pageSize.height - 30;
    doc.setFontSize(12);
    doc.text("Parent's Signature:", 15, footerY);
    doc.line(55, footerY + 2, 90, footerY + 2);
    doc.text("Authorized Signature:", 115, footerY);
    doc.line(160, footerY + 2, 195, footerY + 2);

    // Save the PDF
    doc.save(`${studentName}_ReportCard.pdf`);
  };

  const handleSubjectChange = (index, field, value) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index][field] = value;
    setSubjects(updatedSubjects);
  };

  const addSubject = () => {
    setSubjects([...subjects, { name: "", marks: "" }]);
  };

  return (
    <div className="report-card-container">
      <h2 className="report-card-heading">Generate Report Card</h2>
      <form className="report-card-form" autoComplete="off">
        <div className="form-group">
          <label htmlFor="studentName" className="form-label">Student Name:</label>
          <input
            id="studentName"
            type="text"
            autoComplete="off"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="className" className="form-label">Class:</label>
          <input
            id="className"
            type="text"
            autoComplete="off"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="examName" className="form-label">Exam Name:</label>
          <input
            id="examName"
            type="text"
            value={examName}
            onChange={(e) => setExamName(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="session" className="form-label">Session:</label>
          <input
            id="session"
            type="text"
            value={session}
            onChange={(e) => setSession(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address" className="form-label">Address:</label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="subject-container">
          <h3>Subjects</h3>
          {subjects.map((subject, index) => (
            <div className="subject-row" key={index}>
              <input
                type="text"
                placeholder="Subject Name"
                value={subject.name}
                onChange={(e) => handleSubjectChange(index, "name", e.target.value)}
                className="subject-input"
              />
              <input
                type="text"
                placeholder="Marks/Grade"
                value={subject.marks}
                onChange={(e) => handleSubjectChange(index, "marks", e.target.value)}
                className="marks-input"
              />
            </div>
          ))}
          <br></br>
          <button type="button" onClick={addSubject} className="add-subject-button">Add Subject</button>
        </div>
      </form>
      <button onClick={generateReportCard} className="generate-report-button">Generate Report Card</button>
    </div>
  );
};

export default GenerateReportCard;
