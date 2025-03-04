import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white pt-6 pb-4">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Green Satva | All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
