import styled from 'styled-components';

export const Input = styled.input`
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

export const Icon = styled.div`
  height: 3em;
  width: 3em;
  min-height: 3em;
  min-width: 3em;
  border-radius: 50%;
  overflow: hidden;
  background-color: #27ab83;
  margin-right: 1em;
  background-image: url('https://i.pravatar.cc/300');
  background-size: cover;
  background-position: top center;
`;
