import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.div`
  width: 30%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 1rem;
  box-sizing: border-box;
`;

export const Textfield = styled.div`
  background-color: #f0f4f8;
  padding: 0.25rem;
  border-radius: 0.5rem;
  grid-area: textfield;
`;

export const Button = styled.button`
  min-height: 3rem;
  background-color: #fff;
  border-radius: 0.5rem;
`;
