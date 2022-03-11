import styled from 'styled-components';

export const DashboardContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  padding: 0;
  box-sizing: border-box;

  @media (min-width: 640px) {
    padding: 0 1rem 1rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem 2rem;
  }

  @media (min-width: 1536px) {
    padding: 0 4rem 4rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 1rem;
  min-width: 100%;
  min-height: 100%;
  align-items: start;
  grid-template-columns: 1fr 3.5fr;
  grid-template-areas:
    'nav nav'
    'contacts chat';

  @media (max-width: 640px) {
    gap: 0;
    grid-template-columns: 1fr;
    grid-template-areas:
      'nav'
      'contacts'
      'chat';
  }
`;
