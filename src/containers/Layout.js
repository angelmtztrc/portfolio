import React, { useEffect, useState } from 'react';
import '../styles/main.css';

// Components
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Layout = props => {
  return (
    <div>
      <div className="flex flex-col min-h-screen bg-light-secondary">
        <Navbar />
        {props.children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
