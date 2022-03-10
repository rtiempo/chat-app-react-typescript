import React from 'react';
import { LoginContainer, Form, Textfield, Button } from './Login.styles';
import { Input } from '../Common/Common';
import { auth } from '../../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseui from 'firebaseui';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const Login = () => {
  // const ui = new firebaseui.auth.AuthUI(auth());
  // ui.start('#firebaseui-auth-container', {
  //   signInOptions: [
  //     auth.EmailAuthProvider.PROVIDER_ID
  //   ],
  // });
  const config = {
    apiKey: 'AIzaSyANOcjT3J-1d_XCJU92lolDXHwCOcwHMUc',
    authDomain: 'chat-app-react-firebase-317dc.firebaseapp.com',
    projectId: 'chat-app-react-firebase-317dc',
    storageBucket: 'chat-app-react-firebase-317dc.appspot.com',
    messagingSenderId: '746948682150',
    appId: '1:746948682150:web:ea71ff33f6690aa9fcef67',
  }
  firebase.initializeApp(config);
  
  const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/signedIn',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],   
  }

  // const handleLogin = () => {
  //   const provider = new firebase.auth.GoogleAuthProvider()
  //   auth.signInWithPopup(provider);
  // }

  return (
    <LoginContainer>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      <Form>
        <Textfield>
          <Input type='text' placeholder='Username'/>
        </Textfield>
        <Textfield>
          <Input type='password' placeholder='Password'/>
        </Textfield>
        {/* <Button onClick={handleLogin}>Login</Button> */}
      </Form>
    </LoginContainer>
  )
}

export default Login;