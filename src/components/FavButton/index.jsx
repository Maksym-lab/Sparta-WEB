import React from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
const FavButton = ({ liked, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;
  return (
    <button type="button" onClick={onClick}>
      <Icon size="32px" />
    </button>
  );
};
export default FavButton;
