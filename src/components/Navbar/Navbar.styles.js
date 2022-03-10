import styled from 'styled-components';
import { Icon } from '../Common/Common';

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 8vh;
  grid-area: nav;

  @media (max-width: 640px) {
    padding: 0 0.5rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: #27ab83;
    min-height: 2rem;
    min-width: 2rem;
  }

  h2 {
    color: #102a43;
  }
`;

export const Menu = styled.div``;

export const DropdownItem = styled.li`
  margin: 1rem 0.5rem;
  list-style: none;
  font-size: 0.9rem;

  &:hover {
    color: #27ab83;
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  visibility: hidden;
  opacity: 0;
  display: block;
  z-index: 50;
  padding: 0 1rem;
  margin: 1rem 0 0;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  transition: opacity 0.3s, visibility 0.3s;
`;

export const Dropdown = styled.div`
  position: relative;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 2rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #fff;
  }

  &:hover ${DropdownList} {
    visibility: visible;
    opacity: 1;
  }
`;

export const DropdownHeader = styled.div`
  display: flex;
  align-items: center;

  ${Icon} {
    height: 2rem;
    width: 2rem;
    min-height: 2rem;
    min-width: 2rem;
  }

  h3 {
    color: #102a43;
  }

  svg {
    color: #627d98;
    margin-left: 1em;
  }
`;
