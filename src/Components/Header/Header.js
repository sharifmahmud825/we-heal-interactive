import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
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
              <Link to='/services' className='nav-link'>
                <Nav.Link href='#services'>Services</Nav.Link>
              </Link>
              <Link to='/doctors' className='nav-link'>
                <Nav.Link href='#doctors'>Doctors</Nav.Link>
              </Link>
              <Link to='/login'>
                <button className='btn btn-primary'>Login</button>
              </Link>
              <Navbar.Text className=''>
                <Nav.Link href='#user'>mark otto</Nav.Link>
              </Navbar.Text>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
