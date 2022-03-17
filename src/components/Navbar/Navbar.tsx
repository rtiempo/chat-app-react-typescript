import React, { useState } from 'react';
import {
  Nav,
  Logo,
  Menu,
  Dropdown,
  DropdownHeader,
  DropdownList,
  DropdownItem,
} from './Navbar.styles';
import { Icon } from '../Common/Common';
import { FaFire, FaAngleDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => setIsOpen(!isOpen);

  return (
    <Nav>
      <Logo>
        <FaFire />
        <h2>ChatApp</h2>
      </Logo>
      <Menu>
        <Dropdown>
          <DropdownHeader onClick={handleDropdown}>
            <Icon />
            <h3>Raiden Ei</h3>
            <FaAngleDown />
          </DropdownHeader>
          <DropdownList>
            <DropdownItem>Change password</DropdownItem>
            <DropdownItem>Signout</DropdownItem>
          </DropdownList>
          {isOpen && (
            <DropdownList>
              <DropdownItem>Change password</DropdownItem>
              <DropdownItem>Signout</DropdownItem>
            </DropdownList>
          )}
        </Dropdown>
      </Menu>
    </Nav>
  );
};

export default Navbar;
