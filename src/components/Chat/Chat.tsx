import React from 'react';
import { ChatContainer, ChatHeader, Bubble, Messages, Message, Textfield, MessageContent } from './Chat.styles';
import { Input, IconButton, Icon } from '../Common/Common';
import { FaPaperPlane } from 'react-icons/fa';

const Chat = () => {
  return (
    <ChatContainer>
      <ChatHeader>
        <Icon />
        <h2>Rayl Xylem</h2>
      </ChatHeader>
      <Messages>        
        <Message isSender={true} >
          <Icon />
          <Bubble>
            <MessageContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</MessageContent>
          </Bubble>
        </Message>
        <Message  isSender={false} >
          <Icon />
          <Bubble>
            <MessageContent>Sed blandit nisi non convallis aliquet.</MessageContent>
          </Bubble>
        </Message>
        <Message isSender={true} >
          <Icon />
          <Bubble>
            <MessageContent>Nulla facilisi.</MessageContent>
          </Bubble>
        </Message>
        <Message isSender={false} >
          <Icon />
          <Bubble>
            <MessageContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</MessageContent>
          </Bubble>
        </Message>
        <Message isSender={false} >
          <Icon />
          <Bubble>
            <MessageContent>Donec ac turpis lacus.</MessageContent>
          </Bubble>
        </Message>
        <Message isSender={false} >
          <Icon />
          <Bubble>
            <MessageContent>Donec sit amet libero quis lorem gravida faucibus ac eu orci.</MessageContent>
          </Bubble>
        </Message>
        <Message isSender={false} >
          <Icon />
          <Bubble>
            <MessageContent>Nam congue enim sodales, mollis nulla molestie, lobortis nisi.</MessageContent>
          </Bubble>
        </Message>
      </Messages>
      <Textfield>
        <Input type='text' placeholder='Message' />
        <IconButton>
          <FaPaperPlane />
        </IconButton>
      </Textfield>
    </ChatContainer>
  )
}

export default Chat;