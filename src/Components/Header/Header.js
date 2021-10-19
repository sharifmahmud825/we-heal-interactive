import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../useFirebase/useFirebase';

const Header = () => {
  const { user, logOut } = useFirebase();
  return (
    <div>
      <Navbar
        bg='light'
        variant='light'
        collapseOnSelect
        expand='lg'
        sticky='top'
      >
        <Container>
          <Navbar.Brand href='#home'>
            <img
              src='https://i.ibb.co/C8JMM41/we-heal-logo.png'
              alt=''
              className='img-fluid'
            />
          </Navbar.Brand>
          <Nav className='ms-auto'>
            <Navbar.Toggle />
            <Navbar.Collapse className='justify-content-end'>
              <Link to='/home' className='nav-link'>
                <Nav.Link href='#home'>Home</Nav.Link>
              </Link>
              <Link to='/doctors' className='nav-link'>
                <Nav.Link href='#doctor'>Doctors</Nav.Link>
              </Link>
              <Link to='/about' className='nav-link'>
                <Nav.Link href='#about'>About Us</Nav.Link>
              </Link>
              <Link to='/contact' className='nav-link'>
                <Nav.Link href='#contact'>Contact Us</Nav.Link>
              </Link>
              <Link to='/appointment' className='nav-link'>
                <Nav.Link href='#appointment'>Appointment</Nav.Link>
              </Link>

              {user.displayName ? (
                <div className='d-flex'>
                  <Navbar.Text className=''>
                    <Nav.Link href='#user'>
                      Signed in as: {user.displayName}
                    </Nav.Link>
                  </Navbar.Text>
                  <button onClick={logOut} className='btn btn-danger ms-2'>
                    Log Out
                  </button>
                </div>
              ) : (
                <Link to='/login'>
                  <button className='btn btn-primary'>Login</button>
                </Link>
              )}
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
