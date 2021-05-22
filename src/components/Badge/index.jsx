import React from 'react';
import { MdWork } from 'react-icons/md';
import BadgeContainer from './styles';
const Badge = (props) => {
  const {
    icon = MdWork,
    message = 'My offers',
  } = props;
  return (
    <BadgeContainer>
      <i>{icon()}</i>
      <h4>{message}</h4>
    </BadgeContainer>
  );
};
export default Badge;
