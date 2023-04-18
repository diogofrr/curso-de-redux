import React from 'react';
import {SignifierBtn} from '../UI/SignifierBtn';
import {useDispatch, useSelector} from 'react-redux';
import {loadNewPhotos} from '../../store/reducers/photos';
import {LoadingBar} from '../UI/LoadingBar';


export const LoadMore = () => {
  const {pages, infinite, loading} = useSelector((state) => state.photos);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(loadNewPhotos(pages));
  };

  if (loading) return <LoadingBar />;
  if (!infinite) return null;

  return (
    <>
      <SignifierBtn
        type="button"
        onClick={handleClick}
      >+</SignifierBtn>
    </>
  );
};
