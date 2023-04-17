import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { autoLogin, login } from '../store/login'

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.login.user);

  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login({username, password}))
  };

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">Usuário</label>
        <input type="text" id="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        {username}
        <br/>
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        {password}
        <br/>
        <button type="submit">Entrar</button>
        <p>{data?.email}</p>
    </form>
  );
};
