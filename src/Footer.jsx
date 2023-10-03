import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#88070B' }} className="bg text-black">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <p>Phone: 0417057939</p>
            <p>E-mail: eltorero@email.com</p>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col">
                  <ul className="list-unstyled">
                  <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link></li>
                  <li><Link className="nav-link" to="/menu">Menu</Link></li>
                  <li><Link className="nav-link" to="/contact">Contact</Link></li>
                </ul> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

