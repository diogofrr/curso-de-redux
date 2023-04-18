import React from 'react';
import {useSelector} from 'react-redux';
import {LoadMore} from '../LoadMore';
import {Img} from '../UI/Img';
import {List} from '../UI/List';
import {ListItem} from '../UI/ListItem';
import {Subtitle} from '../UI/Subtitle';
import {Text} from '../UI/Text';

const Photos = () => {
  const {list} = useSelector((state) => state.photos);

  return (
    <>
      <List>
        {list.map((photo) => (
          <ListItem key={photo.id}>
            <Img src={photo.src} alt={photo.title} />
            <Subtitle>{photo.title}</Subtitle>
            <Text>{photo.acessos}</Text>
          </ListItem>
        ))}
      </List>
      <LoadMore />
    </>
  );
};

export default Photos;
