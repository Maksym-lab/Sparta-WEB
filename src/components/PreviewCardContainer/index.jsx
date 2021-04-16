import React from 'react';
import Grid from './styles';
import PreviewCard from '../PreviewCard';
const PreviewCardContainer = () => {
  return (
    <>
      <Grid>
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
      </Grid>
    </>
  );
};
export default PreviewCardContainer;
