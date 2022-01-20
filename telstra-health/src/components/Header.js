import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  const [ activeTab, setActiveTab ] = useState("Home");
  return (
    <div className="header">
      <p className="logo">Telstra Health</p>
        <div className="header-right">
          <Link to='/'>
          <p className={`${activeTab === 'Home' ? 'active' : ''}`}
           onClick={() => setActiveTab('Home')}> Home </p>
          </Link>

          <Link to='/add'>
          <p className={`${activeTab === 'AddPatient' ? 'active' : ''}`}
           onClick={() => setActiveTab('AddPatient')}> Add New Patient </p>
          </Link>

        </div>
    </div>
  );
};

export default Header;
