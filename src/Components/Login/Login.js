import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../useFirebase/useFirebase';

const Login = () => {
  const { signInUsingGoogle } = useFirebase();
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6'>
            <h1 className='my-3'>Please Login</h1>
            <form>
              <div className='mb-3'>
                <input type='email' class='form-control' placeholder='Email' />
              </div>
              <div className='mb-3'>
                <input
                  type='password'
                  class='form-control'
                  placeholder='Password'
                />
              </div>
              <button type='submit' className='btn btn-primary my-2 w-100'>
                Submit
              </button>
              <br />
              <button
                onClick={signInUsingGoogle}
                type='submit'
                className='btn btn-light border-primary my-2 w-100'
              >
                <i className='me-3 fab fa-google'></i> Google
              </button>
            </form>
            <p className='my-3'>
              Are you a new User ?<Link to='/register'>Register</Link>
            </p>
          </div>
          <div className='col-md-3'></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
