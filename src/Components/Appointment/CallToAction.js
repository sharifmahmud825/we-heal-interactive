import React from 'react';

const CallToAction = () => {
  return (
    <div className='bg-light'>
      <div className='container'>
        <div className='row d-flex justify-content-center align-items-center'>
          <div className='col-md-6'>
            <div>
              <p className='my-4'>NEED A DOCTOR FOR CHECK-UP?</p>
              <h1 className='my-4 text-primary'>
                Just Make an Appointment and You’re Done!
              </h1>
              <h4 className='my-4'>Get Your Quote or Call:</h4>
              <h1 className='my-4'>(0080) 123-453-789</h1>
              <button className='btn btn-primary'> Appointment</button>
            </div>
          </div>
          <div className='col-md-6'>
            <div>
              <img
                src='https://i.ibb.co/fd9wDtC/image-4.png'
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

export default CallToAction;
