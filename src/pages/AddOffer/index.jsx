import React from 'react';
import RoomForm from '../../components/RoomForm';
import CreateRoomMutation from '../../containers/CreateRoomMutation';
import { navigate } from '@reach/router';
const AddOffer = () => {
  return (
    <CreateRoomMutation>
      {(createRoom, { data, loading, error }) => {
        const onSubmit = (variables) => {
          createRoom({ variables }).then(({ data }) => {
          });
          alert('Room created');
          navigate('/');
        };
        if (error) return <p>Sorry, something went wrong</p>;
        return <RoomForm disabled={loading} onSubmit={onSubmit} />;
      }}
    </CreateRoomMutation>
  );
};
export default AddOffer;
