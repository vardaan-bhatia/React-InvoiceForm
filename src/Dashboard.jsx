import React from "react";
import "./style.css";
import { ArrowLeft } from "lucide-react";
import UploadSection from "./components/UploadSection";
import InvoiceSection from "./components/InvoiceSection";

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <div className="header">
        <div className="header-left">
          <ArrowLeft className="icon" />
          <h1 className="header-title">Create New Invoice</h1>
        </div>
        <div className="tabs">
          <p className="tab active">Vendor Details</p>
          <p className="tab">Invoice Details</p>
          <p className="tab">Comments</p>
          <div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="main-container">
        <UploadSection />
        <InvoiceSection />
      </div>
    </div>
  );
};

export default Dashboard;
