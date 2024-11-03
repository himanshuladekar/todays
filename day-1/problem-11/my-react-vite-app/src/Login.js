import React from 'react';
import { useForm } from 'react-hook-form';
import { auth } from './firebaseConfig';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    auth.signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        history.push('/dashboard');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email', { required: true })} placeholder="Email" />
      {errors.email && <span>Email is required</span>}
      
      <input type="password" {...register('password', { required: true })} placeholder="Password" />
      {errors.password && <span>Password is required</span>}

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;