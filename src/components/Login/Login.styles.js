import styled from 'styled-components';

export const LoginContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Textfield = styled.div`
  background-color: #f0f4f8;
  padding: 0.25rem;
  border-radius: 0.5rem;
`;

export const Button = styled.input`
  min-height: 3rem;
  background-color: #27ab83;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 4rem;

  svg {
    color: #27ab83;
    min-height: 2rem;
    min-width: 2rem;
  }

  h2 {
    color: #102a43;
  }
`;

export const Form = styled.form`
  min-width: 90%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 1rem;
  box-sizing: border-box;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  ${Textfield} {
    margin: 0.5rem 0;
  }

  input[type='submit'] {
    margin: 1rem 0 0;
  }

  p,
  h2,
  h4,
  h5 {
    color: #102a43;
  }

  p {
    font-size: 0.8rem;
    margin: 0 0 0.5rem;
    color: #d64545;
  }

  a {
    text-decoration: none;
    color: #27ab83;
  }

  h4 {
    margin: 0 0 3rem;
  }

  h5 {
    margin: 0.5rem 0;
    font-weight: normal;
    text-align: center;
  }

  @media (min-width: 768px) {
    min-width: 50%;
  }

  @media (min-width: 1024px) {
    min-width: 40%;
  }

  @media (min-width: 1280px) {
    min-width: 30%;
  }

  @media (min-width: 1536px) {
    min-width: 20%;
  }
`;
