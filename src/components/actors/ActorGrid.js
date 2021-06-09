import React from 'react';
import ShowsCard from '../shows/ShowsCard';
import IMAGE_NOT_FOUND from '../../Image/not-found.png';

const ActorGrid = ({ data }) => {
  return (
    <div>
      {data.map(({ person }) => (
        <ShowsCard
          key="person.id"
          name={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.deathday}
          gender={person.gender}
          image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
        />
      ))}
    </div>
  );
};

export default ActorGrid;
