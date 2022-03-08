import React from 'react';
import { DashboardContainer, Grid } from './Dashboard.styles';
import Chat from '../Chat/Chat';
import Contacts from '../Contacts/Contacts';
import Navbar from '../Navbar/Navbar';

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Grid>
        <Navbar />
        <Contacts />
        <Chat />
      </Grid>
    </DashboardContainer>
  )
}

export default Dashboard;