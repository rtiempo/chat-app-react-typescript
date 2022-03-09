import styled from 'styled-components';

export const DashboardContainer = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 0 2rem 2rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 4em;
  max-width: 100%;
  max-height: 100%;
  align-items: start;
  grid-template-columns: 1fr 3.5fr;
  grid-template-areas:
    'nav nav'
    'contacts chat';

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'nav'
      'contacts'
      'chat';
  }
`;
