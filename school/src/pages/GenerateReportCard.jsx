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

    const totalMarksPossible = validSubjects * 100;
    const percentage = totalMarksPossible > 0 ? (totalMarks / totalMarksPossible) * 100 : 0;

    return { totalMarks, totalMarksPossible, percentage };
  };

  const generateReportCard = () => {
    if (!studentName || !className || !examName || !session || !address) {
      alert("Please fill in all the fields before generating the report card.");
      return;
    }

    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(56, 96, 178);
    doc.text("Kaizen Pre-Play School", 105, 20, { align: "center" });

    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text("Mohanpur, Giridih, Jharkhand, PIN - 815311", 105, 30, { align: "center" });
    doc.text("Phone: +91 7909019167", 105, 35, { align: "center" });

    doc.setFontSize(18);
    doc.setTextColor(255, 87, 34);
    doc.text("Student Report Card", 105, 50, { align: "center" });

    const currentDate = new Date().toLocaleDateString();
    doc.setFontSize(12);
    doc.setTextColor(50, 50, 50);
    doc.text(`Date: ${currentDate}`, 105, 60, { align: "center" });

    const { totalMarks, totalMarksPossible, percentage } = calculateTotalAndPercentage();
    doc.autoTable({
      startY: 70,
      head: [["Subject", "Marks"]],
      body: subjects.map((subject) => [subject.name || "-", subject.marks || "-"]),
      theme: "grid",
      margin: { top: 10, left: 20, right: 20 },
    });

    doc.setFont("helvetica", "bold");
    doc.text(`Total Marks: ${totalMarks} / ${totalMarksPossible}`, 20, doc.lastAutoTable.finalY + 10);
    doc.text(`Percentage: ${percentage.toFixed(2)}%`, 20, doc.lastAutoTable.finalY + 20);

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
          <label>Student Name:</label>
          <input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} className="form-input" />
        </div>
        <div className="form-group">
          <label>Class:</label>
          <input type="text" value={className} onChange={(e) => setClassName(e.target.value)} className="form-input" />
        </div>
        <div className="form-group">
          <label>Exam Name:</label>
          <input type="text" value={examName} onChange={(e) => setExamName(e.target.value)} className="form-input" />
        </div>
        <div className="form-group">
          <label>Session:</label>
          <input type="text" value={session} onChange={(e) => setSession(e.target.value)} className="form-input" />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-input" />
        </div>
        <div className="subject-container">
          <h3>Subjects</h3>
          {subjects.map((subject, index) => (
            <div className="subject-row" key={index}>
              <input type="text" placeholder="Subject Name" value={subject.name} onChange={(e) => handleSubjectChange(index, "name", e.target.value)} className="subject-input" />
              <input type="text" placeholder="Marks" value={subject.marks} onChange={(e) => handleSubjectChange(index, "marks", e.target.value)} className="marks-input" />
            </div>
          ))}
          <button type="button" onClick={addSubject} className="add-subject-button">Add Subject</button>
        </div>
      </form>
      <button onClick={generateReportCard} className="generate-report-button">Generate Report Card</button>
    </div>
  );
};

export default GenerateReportCard;
