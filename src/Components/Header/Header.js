import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar bg='light' variant='light' collapseOnSelect expand='lg'>
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
              <Link to='/Doctors' className='nav-link'>
                <Nav.Link href='#doctors'>Doctors</Nav.Link>
              </Link>
              <Navbar.Text className='ms-4'>
                <a href='#login'>Mark Otto</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
