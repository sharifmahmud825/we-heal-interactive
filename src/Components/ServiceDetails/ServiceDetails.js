import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [details, setDetails] = useState([]);
  const [detail, setDetail] = useState({});

  useEffect(() => {
    fetch('/services.JSON')
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  useEffect(() => {
    const foundDetails = details.find((detail) => detail.id === serviceId);
    console.log(foundDetails);
  }, [details]);
  return (
    <div>
      <h2>Details of : {serviceId}</h2>
      <h2>{detail?.service}</h2>
    </div>
  );
};

export default ServiceDetails;
