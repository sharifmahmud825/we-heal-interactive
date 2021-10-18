import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <Container>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6'>
            <h1 className='mt-5'>Please Login</h1>
            <Form>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  className='p-2'
                />
                <Form.Text className='text-muted'>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  className='p-2'
                />
              </Form.Group>
              <Button
                variant='light'
                type='submit'
                className='my-3 border-dark'
              >
                <i className='fab fa-google me-2 text-primary p-2'></i> Google
              </Button>
              <br />
              <Button variant='primary' type='submit' className='w-100'>
                Submit
              </Button>
            </Form>
            <p className='my-3'>
              Are you a new User ?<Link to='/register'>Register</Link>
            </p>
          </div>
          <div className='col-md-3'></div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
