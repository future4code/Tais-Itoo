import React, { useEffect } from "react";
import axios from "axios";

function PokeCard(props) {
 const [pokemon, setPokemon] = useState({});

 const getUserById = (userId) => {
  axios
  .get(`${baseUrl}/users/${pokeName}`)
  .then(response => {
    setPokemon(response.data.results);
  })
  .catch(err => {
    console.log(err);
  });
};
 
useEffect(() => {
getUserById(props.pokeName)
}, [props.pokeName]);

    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
  }


export default PokeCard;
