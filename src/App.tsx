import React, { useState } from 'react';
import { Dashboard, Login, Register } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const registerProps = {
    registerEmail: registerEmail,
    setRegisterEmail: setRegisterEmail,
    registerPassword: registerPassword,
    setRegisterPassword: setRegisterPassword,
  }

  const handleLogin = async () => {

  }
  
  const handleRegister = async () => {

  }

  const logout = async () => {

  }

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>    
    </>
  );
}

export default App;
