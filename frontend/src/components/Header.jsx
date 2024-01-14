import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {FaShoppingCart, FaUser} from 'react-icons/fa'

const Header = () => {
  return (
    <header>
        <Navbar style={{backgroundColor:"tomato"}} variant='dark' expand='lg' collapseOnSelect>
          <Container>
            <Navbar.Brand href='/'>E-Mart</Navbar.Brand>
            <Navbar.Toggle  aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto px-2'>
                <Nav.Link href='/cart' className=''><FaShoppingCart />&nbsp;Cart</Nav.Link>
                <Nav.Link href='/login'><FaUser />&nbsp;Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </header>
  )
}

export default Header