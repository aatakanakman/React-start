import React from 'react';
import {Container} from 'reactstrap';
import Navi from '../navi/Navi'
import Dashboard from './Dashboard';

function App() { 
  return (
    <Container>
        <Navi></Navi>
        <Dashboard></Dashboard>
    </Container>
  );
}

export default App;
