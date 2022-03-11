import React, { useState } from 'react';
import { LoginContainer, Form, Textfield } from './Login.styles';
import { Input, Button } from '../Common/Common';
import { useForm, SubmitHandler } from 'react-hook-form';
import { auth } from '../../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseui from 'firebaseui';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

type Inputs = {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(email, password);
    console.log(data);
  }
  // const ui = new firebaseui.auth.AuthUI(auth());
  // ui.start('#firebaseui-auth-container', {
  //   signInOptions: [
  //     auth.EmailAuthProvider.PROVIDER_ID
  //   ],
  // });
  // const config = {
  //   apiKey: 'AIzaSyANOcjT3J-1d_XCJU92lolDXHwCOcwHMUc',
  //   authDomain: 'chat-app-react-firebase-317dc.firebaseapp.com',
  //   projectId: 'chat-app-react-firebase-317dc',
  //   storageBucket: 'chat-app-react-firebase-317dc.appspot.com',
  //   messagingSenderId: '746948682150',
  //   appId: '1:746948682150:web:ea71ff33f6690aa9fcef67',
  // }
  // firebase.initializeApp(config);
  
  // const uiConfig = {
  //   signInFlow: 'popup',
  //   signInSuccessUrl: '/signedIn',
  //   signInOptions: [
  //     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //   ],   
  // }

  // const handleLogin = () => {
  //   const provider = new firebase.auth.GoogleAuthProvider()
  //   auth.signInWithPopup(provider);
  // }

  return (
    <LoginContainer>
      {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> */}
      <Form onSubmit={handleSubmit(handleOnSubmit)}>
        <h2>Welcome back</h2>
        <h4>Sign in to continue.</h4>
        <Textfield>
          <Input 
            type='text' 
            placeholder='Username'
            {...register('email', {required: true, pattern: /^\S+@\S+$/i})}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setEmail(e.target.value)}} />
        </Textfield>
        {errors?.email?.type === 'required' && <p>This field is required.</p>}
        {errors?.email?.type === 'pattern' && <p>Please use a valid email.</p>}
        <Textfield>
          <Input 
            type='password' 
            placeholder='Password'
            {...register('password', {required: 'This field is required.', minLength: 6, maxLength: 32})}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setPassword(e.target.value)}} />
        </Textfield>
        {errors?.password?.type === 'required' && <p>This field is required.</p>}
        {errors?.password?.type === 'minLength' && <p>Password must contain at least 3 characters.</p>}
        {errors?.password?.type === 'maxLength' && <p>Password must not exceed 32 characters.</p>}
        <h5>Don't have an account? <a>Sign up</a></h5>
        <Button type='submit' value='Login' />
      </Form>
    </LoginContainer>
  )
}

export default Login;