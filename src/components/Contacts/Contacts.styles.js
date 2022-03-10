import styled from 'styled-components';
import { Icon } from '../Common/Common';

export const ContactsContainer = styled.div`
  grid-area: contacts;

  @media (max-width: 640px) {
    padding: 0 1rem;
  }
`;

export const SearchBar = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 1.5rem;
  padding: 0.25rem;
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  @media (max-width: 640px) {
    margin: 0;
  }
`;

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 72vh;
  max-height: 72vh;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 640px) {
    flex-direction: row;
    overflow-y: none;
    overflow-x: scroll;
    max-width: 90vw;
    min-height: 15vh;
    max-height: 15vh;
  }
`;

export const Notification = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  min-height: 1.5rem;
  min-width: 1.5rem;
  border-radius: 50%;
  background-color: #27ab83;
  display: flex;
  justify-content: center;
  align-items: center;

  h5 {
    color: #fff;
  }
`;

export const Contact = styled.div`
  display: grid;
  padding: 1rem 1rem;
  gap: 0.25rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-areas:
    'icon name notification'
    'icon message notification';
  transition: background-color, 0.2s;

  ${Icon} {
    grid-area: icon;
  }

  h4 {
    color: #102a43;
    grid-area: name;
  }

  p {
    color: #102a43;
    font-size: 0.9rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    grid-area: message;
  }

  ${Notification} {
    grid-area: notification;
    margin-left: auto;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 640px) {
    padding: 1rem 0.5rem;
    word-break: break-word;
    min-width: 4.5rem;
    text-align: center;
    gap: 0;
    grid-template-areas:
      'icon'
      'name';

    ${Icon} {
      margin: auto;
    }

    h4 {
      font-size: 0.75rem;
      overflow: hidden;
      max-width: 4.5rem;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    p {
      display: none;
    }

    ${Notification} {
      display: none;
    }
  }
`;
