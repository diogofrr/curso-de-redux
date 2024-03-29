import React from 'react';
import {SignifierBtn} from '../UI/SignifierBtn';
import {useDispatch, useSelector} from 'react-redux';
import {loadNewPhotos} from '../../store/reducers/photos';
import {LoadingBar} from '../UI/LoadingBar';
import {Message} from '../UI/Message';

export const LoadMore = () => {
  const {pages, infinite, loading} = useSelector((state) => state.photos);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(loadNewPhotos(pages));
  };

  if (loading) return <LoadingBar />;
  if (!infinite) return <Message>Não há mais postagens.</Message>;

  return (
    <>
      <SignifierBtn
        type="button"
        onClick={handleClick}
      >+</SignifierBtn>
    </>
  );
};
