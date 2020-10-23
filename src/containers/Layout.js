import React, { useEffect, useState } from 'react';
import '../styles/main.css';

// Components
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Layout = props => {
  // State for change dark/light theme
  const [theme, setTheme] = useState('');

  useEffect(() => {
    setTheme(localStorage.getItem('theme') || 'light');
  }, []);

  return (
    <div className={theme}>
      <div className="flex flex-col min-h-screen dark:bg-dark-secondary bg-light-secondary">
        <Navbar theme={theme} setTheme={setTheme} />
        {props.children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
