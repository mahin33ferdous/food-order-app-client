import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="py-3 my-4 bg-success ">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3 text-white">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Features</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-white">About</a></li>
    </ul>
    <p className="text-center text-white">© 2023 Foodie, Inc</p>
  </footer>
        </div>
    );
};

export default Footer;