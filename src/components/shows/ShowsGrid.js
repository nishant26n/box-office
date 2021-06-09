import React from 'react';
import ShowsCard from './ShowsCard';
import IMAGE_NOT_FOUND from '../../Image/not-found.png';
import { FlexGrid } from '../styled';

const ShowsGrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({ show }) => (
        <ShowsCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
          summary={show.summary}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowsGrid;
