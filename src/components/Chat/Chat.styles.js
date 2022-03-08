import styled from 'styled-components';
import { Icon } from '../Common/Common';

export const ChatContainer = styled.div`
  display: flex;
  padding: 2em;
  flex-direction: column;
  background-color: #fff;
  border-radius: 2em;
  box-sizing: border-box;
  grid-area: chat;
`;

export const ChatHeader = styled.div`
  display: flex;
  justify-content: flex-start;

  h2 {
    color: #102a43;
  }
`;

export const Messages = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 1.5em 0;
  padding: 0.5em 0;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const MessageContent = styled.p``;

export const Bubble = styled.div`
  display: flex;
  max-width: 70%;
  padding: 1em 1em;
  margin-bottom: 1em;
  align-items: center;
  overflow-wrap: break-word;
  word-break: break-word;
  box-sizing: border-box;
`;

export const Message = styled.div`
  display: flex;

  ${Icon} {
    display: ${({ isSender }) => (isSender ? 'none' : 'block')};
    height: 2.5em;
    width: 2.5em;
    min-height: 2.5em;
    min-width: 2.5em;
    margin-right: 1em;
  }

  ${Bubble} {
    margin-left: ${({ isSender }) => (isSender ? 'auto' : 'none')};
    margin-right: ${({ isSender }) => (isSender ? 'none' : 'auto')};
    background-color: ${({ isSender }) => (isSender ? '#334E68' : '#f0f4f8')};
    border-radius: ${({ isSender }) =>
      isSender ? '1em 0 1em 1em' : '0 1em 1em 1em'};
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
  padding: 0.5em;
  border-radius: 0.5em;
`;
