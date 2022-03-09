import React from 'react';
import { ContactsContainer, SearchBar, ContactList, Contact, Notification} from './Contacts.styles';
import { Input, IconButton, Icon } from '../Common/Common';
import { FaSearch } from 'react-icons/fa';

const Contacts = () => {
  return (
    <ContactsContainer>
      <SearchBar>
        <Input type='text' placeholder='Search' />
        <IconButton>
          <FaSearch />
        </IconButton>
      </SearchBar>
      <ContactList>
        <Contact>
          <Icon />
          <h4>Rayl Xylem</h4>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
          <Notification>
            <h5>4</h5>
          </Notification>
        </Contact>
        <Contact>
          <Icon />
          <h4>Rayl Xylem</h4>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
          <Notification>
            <h5>4</h5>
          </Notification>
        </Contact>
        <Contact>
          <Icon />
          <h4>Rayl Xylem</h4>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
          <Notification>
            <h5>4</h5>
          </Notification>
        </Contact>
        <Contact>
          <Icon />
          <h4>Rayl Xylem</h4>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
          <Notification>
            <h5>4</h5>
          </Notification>
        </Contact>
        <Contact>
          <Icon />
          <h4>Rayl Xylem</h4>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
          <Notification>
            <h5>4</h5>
          </Notification>
        </Contact>
        <Contact>
          <Icon />
          <h4>Rayl Xylem</h4>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
          <Notification>
            <h5>4</h5>
          </Notification>
        </Contact>
        <Contact>
          <Icon />
          <h4>Rayl Xylem</h4>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
          <Notification>
            <h5>4</h5>
          </Notification>
        </Contact>
        <Contact>
          <Icon />
          <h4>Rayl Xylem</h4>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
          <Notification>
            <h5>4</h5>
          </Notification>
        </Contact>
        <Contact>
          <Icon />
          <h4>Rayl Xylem</h4>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
          <Notification>
            <h5>4</h5>
          </Notification>
        </Contact>
        <Contact>
          <Icon />
          <h4>Rayl Xylem</h4>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
          <Notification>
            <h5>4</h5>
          </Notification>
        </Contact>
        <Contact>
          <Icon />
          <h4>Rayl Xylem</h4>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
          <Notification>
            <h5>4</h5>
          </Notification>
        </Contact>
        <Contact>
          <Icon />
          <h4>Rayl Xylem</h4>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
          <Notification>
            <h5>4</h5>
          </Notification>
        </Contact>
      </ContactList>
    </ContactsContainer>
  )
}

export default Contacts