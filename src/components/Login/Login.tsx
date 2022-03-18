import React, { useState, useEffect, useContext } from 'react';
import { LoginContainer, Form, Textfield } from './Login.styles';
import { Input, Button } from '../Common/Common';
import { useForm, SubmitHandler } from 'react-hook-form';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('USER: ', user);
  }, [user]);

  const handleOnSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    await signInWithEmailAndPassword(auth, email, password).then(() =>
      navigate('/')
    );
  };

  return (
    <LoginContainer>
      <Form onSubmit={handleSubmit(handleOnSubmit)}>
        <h2>Welcome back</h2>
        <h4>Sign in to continue.</h4>
        <Textfield>
          <Input
            type='text'
            placeholder='Email'
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
          />
        </Textfield>
        {errors?.email?.type === 'required' && <p>This field is required.</p>}
        {errors?.email?.type === 'pattern' && <p>Please use a valid email.</p>}
        <Textfield>
          <Input
            type='password'
            placeholder='Password'
            {...register('password', {
              required: 'This field is required.',
              minLength: 6,
              maxLength: 32,
            })}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
          />
        </Textfield>
        {errors?.password?.type === 'required' && (
          <p>This field is required.</p>
        )}
        {errors?.password?.type === 'minLength' && (
          <p>Password must contain at least 3 characters.</p>
        )}
        {errors?.password?.type === 'maxLength' && (
          <p>Password must not exceed 32 characters.</p>
        )}
        <h5>
          Don't have an account? <Link to='/register'>Sign up</Link>
        </h5>
        <Button type='submit' value='Login' />
      </Form>
    </LoginContainer>
  );
};

export default Login;
