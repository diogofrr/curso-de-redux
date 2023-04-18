import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {loadNewPhotos} from '../../store/reducers/photos';
import Photos from '../Photos';

const Feed = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadNewPhotos(1));
  }, []);

  return (
    <>
      <Photos />
    </>
  );
};

export default Feed;
