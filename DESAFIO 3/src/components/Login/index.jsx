import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import {autoLogin, login} from '../../store/reducers/login';

import {Form} from '../Form/Form';
import {FormControl} from '../Form/FormControl';
import {Input} from '../Form/Input';
import {Label} from '../Form/Label';
import {LoginBtn} from '../Form/LoginBtn';
import {Error} from '../UI/Error';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login({username, password}));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormControl>
        <Label htmlFor="user">Usuário</Label>
        <Input
          id="user"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        {
          !username &&
          <Error>Este campo é obrigatário</Error>
        }
      </FormControl>
      <FormControl>
        <Label htmlFor="current-password">Senha</Label>
        <Input
          id="current-password"
          type="password"
          value={password} onChange={(e) => setPassword(e.target.value)}
          required
        />
        {
          !password &&
          <Error>Este campo é obrigatário</Error>
        }
      </FormControl>
      <LoginBtn>Entrar</LoginBtn>
    </Form>
  );
};

export default Login;
