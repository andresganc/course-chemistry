
import React, { useState, useEffect, useReducer, useMemo } from 'react';

const initialState = {
  favorites: []
}

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    default:
      return state;
  }
}

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);


  const handleClick = favorite => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  // Filter
  const filteredUsers = useMemo(() =>
    characters.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    }),
    [characters, search]
  )

  // Filter sin useMemo
  // const filteredUsers = characters.filter((user) => {
  //   return user.name.toLowerCase().includes(search.toLowerCase());
  // })

  return (
    <div className="Characters">

      {favorites.favorites.map(favorite => (
        <li key={favorite.id}>
          {favorite.name}
        </li>
      ))}

      <br/><br/>

      <div className="Search">
        <input type="text" value={search} onChange={handleSearch} />
      </div>

      {filteredUsers.map(character => (
        <div className="item" key={character.id}>
          <img src={character.image} alt="" style={{width:'150px'}}/>
          <p>{character.name}</p>
          <button type="button" onClick={() => handleClick(character)}>Agregar a Favoritos</button>
          <br/><br/><br/>
        </div>
      ))}
    </div>
    
  );
}

export default Characters;