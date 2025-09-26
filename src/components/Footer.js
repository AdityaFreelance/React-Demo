import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start mt-auto py-3">
      <div className="container p-4">
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © {new Date().getFullYear()} HTML Developer Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
