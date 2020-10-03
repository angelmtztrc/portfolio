import React from 'react';
import '../styles/main.css';

// Components
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Layout = props => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto my-auto px-6 lg:px-0">
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
