import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PokeData.css";

const PokeData = ({ searchTerm }) => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      if (!searchTerm) return;

      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`
        );
        console.log(response.data);
        setPokemon(response.data);
        setError(null);
      } catch (err) {
        console.log("Pokemon not found");
        setError("Pokemon not found");
        setPokemon(null);
      }
    };

    fetchPokemon();
  }, [searchTerm]);

  if (error) return <div className="error">{error}</div>;
  if (!pokemon) return null;

  return (
    <div className="pokemon-data">
      <table>
        <tbody>
          <tr>
            <td rowSpan="6">
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                loading="eager"
                style={{ width: "200px", height: "200px" }}
              />
            </td>
            <th colSpan="2">
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </th>
          </tr>
          <tr>
            <td>Type:</td>
            <td>
              {pokemon.types.map((type, index) => (
                <span key={index} className={`type ${type.type.name}`}>
                  {type.type.name}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>Height:</td>
            <td>{pokemon.height / 10} m</td>
          </tr>
          <tr>
            <td>Weight:</td>
            <td>{pokemon.weight / 10} kg</td>
          </tr>
          <tr>
            <td>Base Experience:</td>
            <td>{pokemon.base_experience}</td>
          </tr>
          <tr>
            <td>Abilities:</td>
            <td>
              {pokemon.abilities.map((ability, index) => (
                <span key={index}>
                  {ability.ability.name}
                  {index < pokemon.abilities.length - 1 ? ", " : ""}
                </span>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PokeData;
