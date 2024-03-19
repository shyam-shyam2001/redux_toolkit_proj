import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import { UseSelector, useSelector } from 'react-redux';

export const Navbarss = () => {
  const getValue=useSelector(state=>state.cart);
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark" >
    <Container>
      <Navbar.Brand href="#home">Redux Store</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link to='/' as={Link}>Product</Nav.Link>
        <Nav.Link to='/cart' as={Link} className="myBag" >My Bag {getValue.length}</Nav.Link>
        
       
      </Nav>
    </Container>
  </Navbar>
    </>
    
  )
}
