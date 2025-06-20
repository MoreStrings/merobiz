import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <nav className="sidebar">
    <ul>
      <li><NavLink to="/dashboard/pricing">Dynamic Pricing</NavLink></li>
      <li><NavLink to="/dashboard/social">Social Trends</NavLink></li>
      <li><NavLink to="/dashboard/fraud">Fraud Detection</NavLink></li>
    </ul>
  </nav>
);

export default Sidebar;

