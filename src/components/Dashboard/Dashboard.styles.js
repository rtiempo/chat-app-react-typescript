import styled from 'styled-components';

export const DashboardContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 2em;
  box-sizing: border-box;
`;

export const Grid = styled.div`
  display: grid;
  gap: 2em;
  grid-template-columns: 1fr 3.5fr;
  grid-template-rows: 10% 90%;
  grid-template-areas:
    'nav nav'
    'contacts chat';
  width: 100%;
`;
