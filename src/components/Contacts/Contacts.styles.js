import styled from 'styled-components';
import { Icon } from '../Common/Common';

export const ContactsContainer = styled.div`
  grid-area: contacts;
`;

export const SearchBar = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
  border-radius: 2em;
`;

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
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
  margin: 1em 0;
  gap: 0.5em;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-areas:
    'icon name notification'
    'icon message notification';
  width: 100%;
  justify-content: space-between;
  align-items: center;

  ${Icon} {
    grid-area: icon;
  }

  h4 {
    grid-area: name;
  }

  p {
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
`;
