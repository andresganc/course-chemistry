

import React, { Fragment, useState, useEffect } from 'react';

// Layouts
import LayoutDashboard from 'layouts/LayoutDashboard'

// Components
import GridContainer from 'components/grid-container'

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  return (
    <Fragment>
      <LayoutDashboard>
        <GridContainer center>
          <div className="Characters">
            {characters.map(character => (
              <div>
                <div>
                  <img src={character.image} alt="" style={{ width: '150px' }} />
                  <p>{character.name}</p>
                </div>
              </div>
            ))}
          </div>
        </GridContainer>
      </LayoutDashboard>
    </Fragment>
  );
}

export default Characters;