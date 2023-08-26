
import React, { useState } from 'react';

function Dashboard() {
  return (
    <div className="dashboard-content">
    <div className="information">
      <div className="general-info-content">
        <u>Info </u>
        <span className="info">Health Card # : XXXXXXXXXX</span>
        <span className="info">Height: XXXXX</span>
        <span className="info">Weight: XXXXX</span>
        <span className="info">Health Conditions: XXXXX</span>
        <span className="info">Medications: XXXXX</span>
        <span className="info">
          Family Doctor: Location, Phone Number &amp; Practice #
        </span>
      </div>
      <div className="calendar">
        <u>Calendar</u>
        <span className="visits-header">
          <b>Past Visits</b>
          <span>December 31, 2022 (Dr. Jones- Cardiology) </span>
          <span> 30, 2023 (Dr.Smith, Ultrasound)</span>
        </span>
        <span className="visits-header">
          <b>Future Visits</b>
          <span>March 12,2023 (Family Doctor, General)</span>
        </span>
      </div>
    </div>
    <div className="quick-access">
      <u>Quick Access</u>
    </div>
  </div>
  );
}

export default Dashboard;
