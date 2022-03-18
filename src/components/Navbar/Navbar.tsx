import React from 'react';
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
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Sign out successful');
        navigate('/login');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Nav>
      <Logo>
        <FaFire />
        <h2>ChatApp</h2>
      </Logo>
      <Menu>
        <Dropdown>
          <DropdownHeader>
            <Icon />
            <h3>Raiden Ei</h3>
            <FaAngleDown />
          </DropdownHeader>
          <DropdownList>
            <DropdownItem>Change password</DropdownItem>
            <DropdownItem>
              <button onClick={handleSignOut}>Signout</button>
            </DropdownItem>
          </DropdownList>
        </Dropdown>
      </Menu>
    </Nav>
  );
};

export default Navbar;
