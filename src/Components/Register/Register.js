import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <Container>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6'>
            <h1 className='my-5'>Please Register</h1>
            <Form>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control type='text' placeholder='Name' className='p-2' />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
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
                <Form.Control
                  type='password'
                  placeholder='Password'
                  className='p-2'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Control
                  type='password'
                  placeholder='Retype Password'
                  className='p-2'
                />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
            <p className='my-3'>
              Already Registered ?<Link to='/login'>Login</Link>
            </p>
          </div>
          <div className='col-md-3'></div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
