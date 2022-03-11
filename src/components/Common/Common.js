import styled from 'styled-components';

export const Input = styled.input`
  min-height: 3rem;
  background-color: inherit;
  padding-left: 1rem;
  border: 0;
  flex-grow: 1;

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
  min-height: 3rem;
  min-width: 3rem;

  svg {
    fill: #366d6f;
  }

  &:hover {
    background-color: rgba(54, 109, 111, 0.1);
  }
`;

export const Icon = styled.div`
  height: 3rem;
  width: 3rem;
  min-height: 3rem;
  min-width: 3rem;
  border-radius: 50%;
  overflow: hidden;
  background-color: #27ab83;
  margin-right: 1em;
  background-image: url(${({ imageUrl }) =>
    imageUrl || 'https://i.pravatar.cc/300'});
  background-size: cover;
  background-position: top center;
`;

export const Button = styled.input`
  min-height: 3rem;
  background-color: #27ab83;
  color: #fff;
  border: none;
  border-radius: 0.5rem;

  :hover,
  :focus {
    background-color: #fff;
    color: #27ab83;
    border: 1px solid #27ab83;
    font-weight: bold;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  }

  :hover {
    transform: translateY(-2px);
  }

  :active {
    background-color: #fff;
    color: #102a43;
    border: 1px solid #27ab83;
    font-weight: bold;
    transform: translateY(0);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  }
`;
