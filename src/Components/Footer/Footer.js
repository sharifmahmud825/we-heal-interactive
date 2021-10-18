import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-primary py-5'>
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-4 text-center'>
            <div>
              <img
                src='https://i.ibb.co/C8JMM41/we-heal-logo.png'
                alt=''
                className='text-center'
              />
            </div>
            <div>
              <p className='text-white'>
                Our goal is to deliver quality of care in a courteous,
                respectful, and compassionate manner. We hope you will allow us
                to care for you and strive to be the first and best choice for
                your family healthcare
              </p>
            </div>
          </div>
          <div className='col-md-4 text-center'>
            <h2 className='text-white'>Our Features</h2>
            <ul className='nav flex-column'>
              <li className='nav-item my-2'>
                <Link to='/home'>
                  <a href='#Home' className='text-white'>
                    Home
                  </a>
                </Link>
              </li>
              <li className='nav-item my-2'>
                <Link to='/services'>
                  <a href='#services' className='text-white'>
                    Services
                  </a>
                </Link>
              </li>
              <li className='nav-item my-2'>
                <Link to='/doctors'>
                  <a href='#doctors' className='text-white'>
                    Doctors
                  </a>
                </Link>
              </li>
              <li className='nav-item my-2'>
                <Link to='/'></Link>
              </li>
            </ul>
          </div>
          <div className='col-md-4 text-center'>
            <h2 className='text-white'>Get In Touch</h2>
            <h5 className='my-3 text-white'>
              <span className='me-3'>
                <i className='fas fa-phone-square-alt'></i>
              </span>
              +000 123 456 789
            </h5>
            <h5 className='my-3 text-white'>
              <span className='me-3'>
                <i className='fas fa-map-marker-alt'></i>
              </span>
              2130 Fulton Street San Diego CA 94117-1080 USA
            </h5>
            <h5 className='my-3 text-white'>
              <span className='me-3'>
                <i className='fas fa-envelope-open-text'></i>
              </span>
              info@gmail.com
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
