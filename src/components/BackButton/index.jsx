import React from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import Circle from './styles';
const BackButton = () => {
  const handleBack = () => {
    window.history.back();
  };
  return (
    <Circle onClick={handleBack}>
      <FaLongArrowAltLeft />
    </Circle>
  );
};
export default BackButton;
