import React, { useState } from 'react';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import initializeAuthentication from '../../Firebase/firebase.init';

initializeAuthentication();
const Register = () => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth();
  // handle input fields

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  //   handle button for login
  const handleRegistration = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      const user = result.user;
      setUser(user);
      console.log(user);
    });
  };
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6'>
            <h1 className='my-5'>Please Register</h1>
            <form onSubmit={handleRegistration}>
              <div class='mb-3'>
                <input
                  onBlur={handleEmail}
                  type='email'
                  class='form-control'
                  placeholder='Email'
                />
              </div>
              <div class='mb-3'>
                <input
                  onBlur={handlePassword}
                  type='password'
                  class='form-control'
                  placeholder='Password'
                />
              </div>
              <button type='submit' class='btn btn-primary w-100'>
                Submit
              </button>
            </form>
            <p className='my-3'>
              Already Registered ?<Link to='/login'>Login</Link>
            </p>
          </div>
          <div className='col-md-3'></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
