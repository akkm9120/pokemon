import React, { useState } from "react";
import PokeData from "../PokeData";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedSearch(searchTerm);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pokemon-search">
          <b>Pokemon : </b>{" "}
        </label>
        <input
          type="search"
          id="pokemon-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter Pokemon name"
          list="pokemon-list"
        />
        <datalist id="pokemon-list">
          <option value="Pikachu" />
          <option value="Charizard" />
          <option value="Bulbasaur" />
          <option value="Squirtle" />
          <option value="Mewtwo" />
          <option value="Gengar" />
          <option value="Gyarados" />
          <option value="Dragonite" />
          <option value="Snorlax" />
          <option value="Eevee" />
        </datalist>{" "}
        <br />
        <button type="submit">Search</button>
      </form>
      <PokeData searchTerm={submittedSearch} />
    </>
  );
};
