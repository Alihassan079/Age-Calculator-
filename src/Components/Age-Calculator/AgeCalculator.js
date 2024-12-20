import React, { useState } from 'react';
import "../Age-Calculator/AgeCalculator.css";
import { FaCalendarAlt } from 'react-icons/fa'; // Importing calendar icon

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!birthDate) {
      setAge('Please select a valid date.');
      return;
    }

    const birth = new Date(birthDate);
    const today = new Date();

    let d1 = birth.getDate();
    let m1 = birth.getMonth() + 1;
    let y1 = birth.getFullYear();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if (m2 >= m1) {
      m3 = m2 - m1;
    } else {
      y3--;
      m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
      d3 = d2 - d1;
    } else {
      m3--;
      d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {
      m3 = 11;
      y3--;
    }

    setAge(`You are ${y3} years, ${m3} months, and ${d3} days old.`);
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  return (
    <div className="container-fluid ">
      <div className="calculator">
        <h1>Age Calculator</h1>
        <div className="input-box">
          <div className="date-picker-container">
            <input
              type="date"
              id="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              max={new Date().toISOString().split('T')[0]}
            />
            <span
              className="calendar-icon"
              onClick={() => document.getElementById('date').showPicker && document.getElementById('date').showPicker()}
            >
              <FaCalendarAlt />
            </span>
          </div>
          <button onClick={calculateAge} className='fw-bold '>Calculate</button>
        </div>
        {age && <p id="result">{age}</p>}
      </div>
    </div>
  );
};

export default AgeCalculator;