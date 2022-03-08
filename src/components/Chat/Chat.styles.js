import styled from 'styled-components';

export const ChatContainer = styled.div`
  display: flex;
  height: 80vh;
  padding: 2em;
  flex-direction: column;
  background-color: #fff;
  border-radius: 2em;
  box-sizing: border-box;
`;

export const ChatHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  min-height: 12%;

  h2 {
    color: #102a43;
  }
`;

export const Messages = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
`;

export const Icon = styled.div`
  height: 3em;
  width: 3em;
  min-height: 3em;
  min-width: 3em;
  border-radius: 50%;
  overflow: hidden;
  background-color: #27ab83;
  margin-right: 1em;
`;

export const MessageContent = styled.p``;

export const Bubble = styled.div`
  display: flex;
  max-width: 40em;
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

export const Input = styled.input`
  min-width: 10em;
  min-height: 3em;
  background-color: inherit;
  padding-left: 1em;
  border: 0;

  &:focus {
    outline: none;
  }
`;

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  min-height: 3em;
  min-width: 3em;

  svg {
    fill: #366d6f;
  }

  &:hover {
    background-color: rgba(54, 109, 111, 0.1);
  }
`;
