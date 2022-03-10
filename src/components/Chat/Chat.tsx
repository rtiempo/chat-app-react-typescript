import React, { useState } from 'react';
import { ChatContainer, ChatHeader, Bubble, Messages, Message, Textfield, MessageContent, ChatContent } from './Chat.styles';
import { Input, IconButton, Icon } from '../Common/Common';
import { FaPaperPlane } from 'react-icons/fa';

const Chat = () => {
  const getRandomNum = () => {
    let min = Math.ceil(1);
    let max = Math.floor(1000);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const [imageUrl, setImageUrl] = useState(getRandomNum());

  return (
    <ChatContainer>
      <ChatContent>
        <ChatHeader>
          <Icon imageUrl={'https://i.pravatar.cc/'+imageUrl} />
          <h2>Rayl Xylem</h2>
        </ChatHeader>
        <Messages>        
          <Message isSender={true} >
            <Icon imageUrl={'https://i.pravatar.cc/'+imageUrl} />
            <Bubble>
              <MessageContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</MessageContent>
            </Bubble>
          </Message>
          <Message  isSender={false} >
            <Icon imageUrl={'https://i.pravatar.cc/'+imageUrl} />
            <Bubble>
              <MessageContent>Sed blandit nisi non convallis aliquet.</MessageContent>
            </Bubble>
          </Message>
          <Message isSender={true} >
            <Icon imageUrl={'https://i.pravatar.cc/'+imageUrl} />
            <Bubble>
              <MessageContent>Nulla facilisi.</MessageContent>
            </Bubble>
          </Message>
          <Message isSender={false} >
            <Icon imageUrl={'https://i.pravatar.cc/'+imageUrl} />
            <Bubble>
              <MessageContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</MessageContent>
            </Bubble>
          </Message>
          <Message isSender={false} >
            <Icon imageUrl={'https://i.pravatar.cc/'+imageUrl} />
            <Bubble>
              <MessageContent>Donec ac turpis lacus.</MessageContent>
            </Bubble>
          </Message>
          <Message isSender={false} >
            <Icon imageUrl={'https://i.pravatar.cc/'+imageUrl} />
            <Bubble>
              <MessageContent>Donec sit amet libero quis lorem gravida faucibus ac eu orci.</MessageContent>
            </Bubble>
          </Message>
          <Message isSender={false} >
            <Icon imageUrl={'https://i.pravatar.cc/'+imageUrl} />
            <Bubble>
              <MessageContent>Nam congue enim sodales, mollis nulla molestie, lobortis nisi.</MessageContent>
            </Bubble>
          </Message>
          <Message isSender={true} >
            <Icon imageUrl={'https://i.pravatar.cc/'+imageUrl} />
            <Bubble>
              <MessageContent>Praesent elementum metus ac leo suscipit semper. Curabitur porttitor magna magna, vel aliquet lacus bibendum eget. Sed iaculis lectus dolor, nec aliquet tellus dapibus sit amet.</MessageContent>
            </Bubble>
          </Message>
          <Message isSender={false} >
            <Icon imageUrl={'https://i.pravatar.cc/'+imageUrl} />
            <Bubble>
              <MessageContent>In vel nisi a purus facilisis malesuada id ut mi.</MessageContent>
            </Bubble>
          </Message>
          <Message isSender={false} >
            <Icon imageUrl={'https://i.pravatar.cc/'+imageUrl} />
            <Bubble>
              <MessageContent>Fusce sed enim condimentum, volutpat nulla efficitur, laoreet felis.</MessageContent>
            </Bubble>
          </Message>
          <Message isSender={true} >
            <Icon imageUrl={'https://i.pravatar.cc/'+imageUrl} />
            <Bubble>
              <MessageContent>Nulla accumsan vestibulum nunc, et porta risus.</MessageContent>
            </Bubble>
          </Message>
          <Message isSender={true} >
            <Icon imageUrl={'https://i.pravatar.cc/'+imageUrl} />
            <Bubble>
              <MessageContent>Sed ornare pellentesque felis non posuere.</MessageContent>
            </Bubble>
          </Message>
        </Messages>
        <Textfield>
          <Input type='text' placeholder='Message' />
          <IconButton>
            <FaPaperPlane />
          </IconButton>
        </Textfield>
      </ChatContent>
    </ChatContainer>
  )
}

export default Chat;