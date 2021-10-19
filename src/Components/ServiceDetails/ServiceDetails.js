import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch('/services.JSON')
      .then((res) => res.json())
      .then((data) => setDetails(data[`${serviceId}` - 1]));
  }, []);

  const { service, description, img, expert, job } = details;
  return (
    <div>
      <div className='row p-3'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
          <div>
            <img src={img} alt='' className='img-fluid' />
          </div>
          <div>
            <h1 className='text-center text-primary my-4'>{service}</h1>
            <h5>{description}</h5>
            <hr />

            <h4>
              Specialist Doctor: <span className='text-primary'>{expert}</span>
            </h4>
            <p>{job}, MBBS</p>
            <Link to='/appointment'>
              <button className='btn btn-primary w-100 ms-auto mb-5'>
                Get Appointment
              </button>
            </Link>
          </div>
        </div>
        <div className='col-md-3'></div>
      </div>
    </div>
  );
};

export default ServiceDetails;
