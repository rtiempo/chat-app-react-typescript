import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 8vh;
  grid-area: nav;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: #27ab83;
    min-height: 2rem;
    min-width: 2rem;
  }

  h2 {
    color: #102a43;
  }
`;
