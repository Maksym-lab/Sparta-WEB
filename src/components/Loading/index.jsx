import React from 'react';
import { Container } from './styles';
const Loading = () => {
  return (
    <Container>
      <div role="group" className="lds-grid">
        <div role="none" />
        <div role="none" />
        <div role="none" />
        <div role="none" />
        <div role="none" />
        <div role="none" />
        <div role="none" />
        <div role="none" />
        <div role="none" />
      </div>
    </Container>
  );
};
export default Loading;
