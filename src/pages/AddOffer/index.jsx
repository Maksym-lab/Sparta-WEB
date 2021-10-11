import React from 'react';
import RoomForm from '../../components/RoomForm';
import CreateRoomMutation from '../../containers/CreateRoomMutation';
const AddOffer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <CreateRoomMutation>
      {
        (createRoom, { data, loading, error }) => {
          const onSubmit = (variables) => {
            createRoom({ variables }).then(({ data }) => {
              console.log(data);
            });
          };
          if (error) return <p>Sorry, something went wrong</p>;
          return <RoomForm disabled={loading} onSubmit={onSubmit} />;
        }
      }
    </CreateRoomMutation>
  );
};
export default AddOffer;
