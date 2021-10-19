import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
  const { id, service, tests, image } = props.service;
  return (
    <div>
      <div className='col'>
        <div className='card p-4'>
          <img src={image} className='card-img-top w-25' alt='...' />
          <div className='card-body'>
            <h3 className='card-title'>{service}</h3>
            <div className='row'>
              <div className='col-md-6 my-3'>
                <span className='me-3'>
                  <i className='fas fa-check'></i>
                </span>
                {tests.num1}
              </div>
              <div className='col-md-6 my-3'>
                <span className='me-3'>
                  <i className='fas fa-check'></i>
                </span>
                {tests.num2}
              </div>
              <div className='col-md-6 my-3'>
                <span className='me-3'>
                  <i className='fas fa-check'></i>
                </span>
                {tests.num3}
              </div>
              <div className='col-md-6 my-3'>
                <span className='me-3'>
                  <i className='fas fa-check'></i>
                </span>
                {tests.num4}
              </div>
            </div>
            <Link to={`/services/${id}`}>
              <button className='btn btn-primary w-100 mt-4'>
                See Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
