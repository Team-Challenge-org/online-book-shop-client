import Spinner from 'components/elements/Spinner/Spinner';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from 'store/store';
import { loginUser } from 'store/user/asyncActions';
import { selectUserData } from 'store/user/selectors';
import { TUser } from 'store/user/types';

const LoginPageLogic = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { loading, error } = useSelector(selectUserData);


  const handleLoginEvent = (e: any) => {
    e.preventDefault();
    let userCredential: TUser = {
      email,
      password,
    };
    dispatch(loginUser(userCredential)).then((result: { payload: any }) => {
      if (result.payload) {
        setEmail('');
        setPassword('');
        navigate('/');
      }
    });
  };

  return (
        <form onSubmit={handleLoginEvent}>
          <label htmlFor="">Email</label>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <label htmlFor="">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit">{loading ? <Spinner /> : 'Login'}</button>
          {error && <div>{error}</div>}
        </form>
      
  );
};

export default LoginPageLogic;
