import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {userLogout} from '../../store/reducers/login';

import Login from '../../components/Login';
import Feed from '../../components/Feed';
import {Header} from '../../components/UI/Header';
import {LogoutBtn} from '../../components/Form/LogoutBtn';
import {Title} from '../../components/UI/Title';
import {Div} from '../../components/UI/Div';
import {LoadingBar} from '../../components/UI/LoadingBar';

const App = () => {
  const {user, token} = useSelector((state) => state.login);
  const loading = token.loading || user.loading;
  const isAuth = user.data;
  const dispatch = useDispatch();
  return (
    <Div>
      <Header>
        <Title>MiniDogs</Title>
        <LogoutBtn
          type="button"
          aria-label="Logout"
          color={loading ? (
            'yellow'
          ) : (
            isAuth ? (
              'green'
            ) : (
              'red'
            )
          )}

          onClick={() => dispatch(userLogout())}
        />
      </Header>
      {loading ?(
        <LoadingBar />
      ):(
        user.data ? (
          <Feed />
        ):(
          <Login />
        )
     )}
    </Div>
  );
};

export default App;
