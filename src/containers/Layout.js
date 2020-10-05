import React from 'react';
import '../styles/main.css';

// Components
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Layout = props => {
  return (
    <div className="min-h-screen flex flex-col bg-light-100">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
