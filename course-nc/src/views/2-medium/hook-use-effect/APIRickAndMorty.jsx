

import React, { useState, useEffect } from 'react';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  return (
    <div className="Characters">
      {characters.map(character => (
        <div>
            <div>
                <img src={character.image} alt="" style={{width:'150px'}}/>
                <p>{character.name}</p>
            </div>
        </div>
        
      ))}
    </div>
  );
}

export default Characters;