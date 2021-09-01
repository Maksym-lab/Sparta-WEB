import React from 'react';
import { Container } from './styles';
const Loading = () => {
  return (
    <Container>
      <div className="lds-grid">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </Container>
  );
};
export default Loading;
