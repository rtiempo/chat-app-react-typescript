import React from 'react';
import { Nav, Logo } from './Navbar.styles';
import { FaFire } from 'react-icons/fa'

const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <FaFire />
        <h2>ChatApp</h2>
      </Logo>
    </Nav>
  )
}

export default Navbar;