import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormControl, Input, Label, LoginBtn, LogoutBtn, Title, FormHeader, Div } from './styles';
import { autoLogin, login } from '../../store/reducers/login';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin())
  }, [dispatch]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({username, password}));;
  }

  return (
    <Div>
      <Form onSubmit={handleSubmit}>
          <FormHeader>
            <Title>MiniDogs</Title>
            <LogoutBtn></LogoutBtn>
          </FormHeader>
          <FormControl>
            <Label htmlFor="user">Usuário</Label>
            <Input id="user" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </FormControl>
          <FormControl>
            <Label htmlFor="current-password">Senha</Label>
            <Input id="password" type="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <LoginBtn>Entrar</LoginBtn>
      </Form>
    </Div>
  );
};

export default Login;
