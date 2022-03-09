import styled from 'styled-components';
import { Icon } from '../Common/Common';

export const ChatContainer = styled.div`
  background-color: #fff;
  border-radius: 2rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  grid-area: chat;

  @media (max-width: 768px) {
    margin: 0;
    border-radius: 2rem 2rem 0 0;
  }
`;

export const ChatContent = styled.div`
  display: grid;
  padding: 2rem;
  min-width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  grid-template-rows: 1fr 10fr 1fr;
  grid-template-areas:
    'header'
    'messages'
    'textfield';

  @media (max-width: 768px) {
    max-height: 90vh;
    padding: 1rem;
  }
`;

export const ChatHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  grid-area: header;

  h2 {
    color: #102a43;
  }
`;

export const Messages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  grid-area: messages;
  min-height: 65vh;
  max-height: 65vh;
  margin: 0.5rem 0;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const MessageContent = styled.p``;

export const Bubble = styled.div`
  display: flex;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  align-items: center;
  overflow-wrap: break-word;
  word-break: break-word;
  box-sizing: border-box;
`;

export const Message = styled.div`
  display: flex;

  ${Icon} {
    display: ${({ isSender }) => (isSender ? 'none' : 'block')};
    height: 2.5rem;
    width: 2.5rem;
    min-height: 2.5rem;
    min-width: 2.5rem;
    margin-right: 1rem;
  }

  ${Bubble} {
    max-width: ${({ isSender }) => (isSender ? '60%' : '50%')};
    margin-left: ${({ isSender }) => (isSender ? 'auto' : 'none')};
    margin-right: ${({ isSender }) => (isSender ? 'none' : 'auto')};
    background-color: ${({ isSender }) => (isSender ? '#334E68' : '#f0f4f8')};
    border-radius: ${({ isSender }) =>
      isSender ? '1rem 0 1rem 1rem' : '0 1rem 1rem 1rem'};
  }

  ${MessageContent} {
    color: ${({ isSender }) => (isSender ? '#fff' : '#102A43')};
  }
`;

export const Textfield = styled.div`
  background-color: #f0f4f8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  grid-area: textfield;
`;
