import React from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import Button from './styles';
const FavButton = ({ liked, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };
  return (
    <Button type="button" onClick={handleClick}>
      <Icon />
    </Button>
  );
};
export default FavButton;
