import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div>
      <div className='container'>
        <div className='row d-flex align-items-center justify-content-center'>
          <div className='col-md-6'>
            <h1 className='text-primary heading'>
              We Are Here to
              <br />
              Keep You Healthy
            </h1>
            <p>
              Excellent People needs excellent care. We are always fully focused
              on helping you to heal and overcome any hurdle. Love is the best
              medicine
            </p>
          </div>
          <div className='col-md-6'>
            <div>
              <img
                src='https://i.ibb.co/S5sxC28/home-slider1.png'
                alt=''
                className='img-fluid'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
