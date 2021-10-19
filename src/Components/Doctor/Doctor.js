import React from 'react';

const Doctor = (props) => {
  const { img, name, specialist, description, phone } = props.doctor;
  return (
    <div>
      <div className='col my-3 '>
        <div className='card border-3 w-100 p-3 bg-light'>
          <img
            src={img}
            className='card-img-top img-fluid '
            alt='...'
            style={{ width: '300px' }}
          />
          <div className='card-body'>
            <h5 className='card-title'>{name}</h5>
            <p className='card-text'>{specialist}</p>
            <p className='card-text'>{description}</p>
            <h4 className='card-text'>{phone}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
