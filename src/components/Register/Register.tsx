import React, { useState } from 'react';
import { RegisterContainer, Form, Textfield, Button, Logo } from './Register.styles';
import { Input } from '../Common/Common';
import { FaFire } from 'react-icons/fa';
import { useForm, SubmitHandler } from 'react-hook-form';

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

  const handleOnSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(name, email, password);
    console.log(data);
  }

  return (
    <RegisterContainer>          
      <Form onSubmit={handleSubmit(handleOnSubmit)}>
        {/* <Logo>
          <FaFire />
          <h2>ChatApp</h2>
        </Logo> */}
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