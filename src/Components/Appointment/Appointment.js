import React from 'react';
import { Link } from 'react-router-dom';

const Appointment = () => {
  return (
    <div>
      <div className='row my-5'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
          <h1 className='text-center my-5'>Get Your Appointment</h1>
          <input type='text' className='form-control my-2' placeholder='Name' />
          <input
            type='text'
            className='form-control my-2'
            placeholder='Address'
          />
          <input
            type='number'
            className='form-control my-2'
            placeholder='Age'
          />
          <button className='btn btn-primary w-100 my-2'>Appointment</button>
        </div>
        <div className='col-md-3'></div>
      </div>
    </div>
  );
};

export default Appointment;
