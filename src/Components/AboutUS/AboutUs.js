import React from 'react';

const AboutUs = () => {
  return (
    <div>
      <div className='container'>
        <h1 className='text-center my-4'>OUR MEDICAL</h1>
        <div className='d-flex justify-content-center my-5'>
          <img
            src='https://i.ibb.co/nCdpwjd/about.jpg'
            alt=''
            className='img-fluid'
          />
        </div>
        <h2 className='text-center text-primary'>
          We're setting Standards in Research what's more, Clinical Care.
        </h2>
        <p className='text-center my-4'>
          We provide the most full medical services, so every person could have
          the oportunity o receive qualitative medical help. Our Clinic has
          grown to provide a world class facility for the treatment of tooth
          loss, dental cosmetics and bore advanced restorative dentistry. We are
          among the most qualified implant providers in the AUS with over 30
          years of uality training and experience.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
