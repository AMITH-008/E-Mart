import React from 'react'
import {Badge,Navbar, Nav, Container} from 'react-bootstrap'
import {FaShoppingCart, FaUser} from 'react-icons/fa'
import {LinkContainer} from 'react-router-bootstrap'
import { useSelector } from 'react-redux';

const Header = () => {
  const cartState = useSelector((state) => state.cart);
  const numCartItems = cartState.cartItems.length;
  console.log(numCartItems);
  return (
    <header>
        <Navbar style={{backgroundColor:"tomato"}} variant='dark' expand='lg' collapseOnSelect>
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand >E-Mart</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle  aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto px-2'>
                <LinkContainer to='/cart'>
                  <Nav.Link>
                    <FaShoppingCart />&nbsp;Cart
                    {
                      numCartItems > 0 && (
                        <Badge pill bg="primary" style={{marginLeft:'5px'}} >{cartState.cartItems.reduce((a, c)=> a + c.quantity, 0)}</Badge>
                      )
                    }
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/login'>
                  <Nav.Link><FaUser />&nbsp;Login</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </header>
  )
}

export default Header