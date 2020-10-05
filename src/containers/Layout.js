import React, { useState } from 'react';
import '../styles/main.css';

// Components
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Layout = props => {
  // State for change dark/light theme
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  return (
    <div className={theme}>
      <div className="min-h-screen flex flex-col bg-light-100 dark:bg-dark-200">
        <Navbar theme={theme} setTheme={setTheme} />
        {props.children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
