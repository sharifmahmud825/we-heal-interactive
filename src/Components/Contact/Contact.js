import React from 'react';

const Contact = () => {
  return (
    <div>
      <div className='container bg-light my-4 p-4 '>
        <div className='row d-flex justify-content-center align-items-center'>
          <div className='col-md-6'>
            <h1>Contact Us</h1>
            <input
              type='text'
              className='form-control my-3'
              placeholder='Name'
            />
            <input
              type='email'
              className='form-control my-3'
              placeholder='Email'
            />
            <textarea
              name=''
              id=''
              cols=''
              rows=''
              className='form-control my-3'
              placeholder='Comment'
            ></textarea>
            <button className='btn btn-primary w-100 mb-3'>Submit</button>
            <h1 className='my-2'>Call: (000) 123 456 789</h1>
            <h4>Located in Bangladesh</h4>
          </div>
          <div className='col-md-6'>
            <img
              src='https://i.ibb.co/NVfp2Kp/contact-img.png'
              alt=''
              className='img-fluid'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
