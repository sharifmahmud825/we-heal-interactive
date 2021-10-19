import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('./doctor.JSON')
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div>
      <div className='container'>
        <div className='row row-cols-1 row-cols-md-2 g-4 '>
          {doctors.map((doctor) => (
            <Doctor doctor={doctor} key={doctor.id}></Doctor>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
