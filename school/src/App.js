import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Events from "./pages/Events";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Owner from "./pages/Owner";
import Dashboard from "./pages/Dashboard"; // Import the Dashboard
import Header from "./components/Header";
import Footer from "./components/Footer";
import GenerateReceipt from "./pages/GenerateReceipt";
import GenerateReportCard from "./pages/GenerateReportCard";
import StudentList from "./components/StudentList"; // Import StudentList
import StudentFeeDetails from "./components/StudentFeeDetails";

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/owner" element={<Owner />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/generate" element={<GenerateReceipt />} />
          <Route
            path="/generate-report-card"
            element={<GenerateReportCard />}
          />

          {/* Add Student Form and List routes */}
          <Route path="/student-form" element={<StudentFeeDetails />} />
          <Route path="/student-list" element={<StudentList />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
