import React, { useState, useEffect } from 'react';
import { RegisterContainer, Form, Textfield } from './Register.styles';
import { Input, Button } from '../Common/Common';
import { useForm, SubmitHandler } from 'react-hook-form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

type Inputs = {
  name: string;
  email: string;
  password: string;
}

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log('USER: ', user);
  }, [user])
  

  const handleOnSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(name, email, password);
    console.log(data);
    setUser(await createUserWithEmailAndPassword(auth, email, password));
  }

  return (
    <RegisterContainer>          
      <Form onSubmit={handleSubmit(handleOnSubmit)}>
        <h2>Get Started</h2>
        <h4>Sign up to continue.</h4>
        <Textfield>
          <Input             
            type='text' 
            placeholder='Name' 
            {...register('name', { required: true, minLength: 3, maxLength: 32 })}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setName(e.target.value)}} />
        </Textfield>
        {errors?.name?.type === 'required' && <p>This field is required.</p>}
        {errors?.name?.type === 'minLength' && <p>Name must contain at least 3 characters.</p>}
        {errors?.name?.type === 'maxLength' && <p>Name must not exceed 32 characters.</p>}
        <Textfield>
          <Input 
            type='text' 
            placeholder='Email' 
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
        <h5>Already have an account? <a>Sign in</a></h5>
        <Button type='submit' value='Register' />
      </Form>
    </RegisterContainer>
  )
}

export default Register;