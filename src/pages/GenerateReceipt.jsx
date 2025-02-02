import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./GenerateReceipt.css";

const GenerateReceipt = () => {
  const [studentName, setStudentName] = useState("");
  const [month, setMonth] = useState("");
  const [session, setSession] = useState("");
  const [amountPaid, setAmountPaid] = useState("");

  const currentDate = new Date().toLocaleDateString();

  const generateReceipt = () => {
    const doc = new jsPDF();

    // Function to print receipt content
    const printReceipt = (startY) => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(26);
      doc.setTextColor(50, 50, 255);
      doc.text("Kaizen Pre Play School", 105, startY, { align: "center" });

      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      doc.setTextColor(50, 50, 50);
      doc.text("Mohanpur, Giridih, Jharkhand, PIN - 815311", 105, startY + 10, {
        align: "center",
      });
      doc.text("Phone: +91 7909019167", 105, startY + 15, { align: "center" });

      doc.setFont("comic-sans-ms", "bold");
      doc.setFontSize(18);
      doc.setTextColor(255, 105, 180);
      doc.text("School Fees Receipt", 105, startY + 30, { align: "center" });

      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      doc.setTextColor(100, 100, 100);
      doc.text("Date: " + currentDate, 105, startY + 40, { align: "center" });

      doc.autoTable({
        startY: startY + 50,
        head: [["Field", "Details"]],
        body: [
          ["Student Name", studentName],
          ["Month", month],
          ["Session", session],
          ["Amount Paid", `Rs ${amountPaid}`],
        ],
        theme: "grid",
        headStyles: {
          fillColor: [255, 182, 193],
          textColor: [50, 50, 50],
          fontSize: 12,
          font: "helvetica",
        },
        bodyStyles: {
          fillColor: [255, 245, 238],
          textColor: [50, 50, 50],
          fontSize: 12,
          font: "helvetica",
        },
        margin: { top: 10, left: 10, right: 10 },
      });

      // Signature section
      const signatureY = startY + 108;
      doc.setFont("comic-sans-ms", "italic");
      doc.setFontSize(14);
      doc.setTextColor(50, 50, 50);
      doc.text(
        "Authorized Signature: ___________________",
        195,
        signatureY,
        { align: "right" }
      );
    };

    printReceipt(25);
    const midPageY = doc.internal.pageSize.height / 2 - 5; 
    doc.setDrawColor(50, 50, 50); 
    doc.setLineWidth(0.5);
    doc.line(10, midPageY, doc.internal.pageSize.width - 10, midPageY);
    printReceipt(doc.internal.pageSize.height / 2 + 10);

    doc.save(`${studentName}_receipt.pdf`);
  };

  return (
      <div className="receipt-container">
      <h2>School Fee Receipt Generator</h2>
      <form
        className="receipt-form"
        onSubmit={(e) => {
          e.preventDefault(); 
          generateReceipt();
        }}
      >
        <div className="form-group">
          <label>Student Name: </label>
          <input
            type="text"
            value={studentName}
            autoComplete="off"
            onChange={(e) => setStudentName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Month: </label>
          <input
            type="text"
            value={month}
            autoComplete="off"
            onChange={(e) => setMonth(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Session: </label>
          <input
            type="text"
            value={session}
            onChange={(e) => setSession(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Amount Paid: </label>
          <input
            type="number"
            value={amountPaid}
            onChange={(e) => setAmountPaid(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="generate-btn">
          Generate Receipt
        </button>
      </form>
    </div>
  );
};

export default GenerateReceipt;
