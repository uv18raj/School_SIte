import React, { useState } from 'react';
import GenerateReportCard from './GenerateReportCard';
import GenerateReceipt from './GenerateReceipt';
import StudentForm from '../components/StudentFeeDetails';
import StudentList from '../components/StudentList';
import './Dashboard.css';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h2 className="dashboard-title">Kaizen Play School Dashboard</h2>
        <p className="dashboard-welcome">
          Welcome to the School's Dashboard! Let's work together to create a wonderful learning experience!
        </p>
      </header>

      <nav className="dashboard-nav">
        <button
          className={`nav-button ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => handleTabChange('home')}
        >
          Home
        </button>
        <button
          className={`nav-button ${activeTab === 'report-card' ? 'active' : ''}`}
          onClick={() => handleTabChange('report-card')}
        >
          Generate Report Card
        </button>
        <button
          className={`nav-button ${activeTab === 'fee-receipt' ? 'active' : ''}`}
          onClick={() => handleTabChange('fee-receipt')}
        >
          Generate Fee Receipt
        </button>
        <button
          className={`nav-button ${activeTab === 'student-form' ? 'active' : ''}`}
          onClick={() => handleTabChange('student-form')}
        >
          Add Fee Deatils
        </button>
        <button
          className={`nav-button ${activeTab === 'student-list' ? 'active' : ''}`}
          onClick={() => handleTabChange('student-list')}
        >
          Students Fee Record
        </button>
      </nav>

      <div className="dashboard-content">
        {activeTab === 'home' && (
          <div className="home-section">
            <h3>Welcome to the Dashboard!</h3>
            <p>This is your central hub for managing all school-related activities.</p>
          </div>
        )}

        {activeTab === 'report-card' && (
          <div className="report-card-section">
            <GenerateReportCard />
          </div>
        )}

        {activeTab === 'fee-receipt' && (
          <div className="fee-receipt-section">
            <GenerateReceipt />
          </div>
        )}

        {activeTab === 'student-form' && (
          <div className="student-form-section">
            <StudentForm />
          </div>
        )}

        {activeTab === 'student-list' && (
          <div className="student-list-section">
            <StudentList />
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
