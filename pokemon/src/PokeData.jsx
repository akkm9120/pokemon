import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PokeData.css";
import { Table } from "./pages/Table";
import { Route, Routes, useNavigate } from "react-router-dom";



const PokeData = ({ searchTerm }) => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemon = async () => {
      if (!searchTerm) return;

      setPokemon(null);
      setError(null);

      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`
        );
        console.log(response.data);
        setPokemon(response.data);
        setError(null);
        navigate(`/pokemon/${searchTerm.toLowerCase()}`);
      } catch (err) {
        console.log("Pokemon not found");
        setError("Pokemon not found");
        setPokemon(null);
      }
    };

    fetchPokemon();
  }, [searchTerm]);

  if (error) return <div className="error">{error}</div>;
  if (!pokemon) return <div className="loading-spinner"></div>;

  return (
    <Routes>
      <Route path="/" element={<Table pokemon={pokemon} />} />
      <Route path={`/pokemon/${searchTerm.toLowerCase()}`} element={<Table pokemon={pokemon} />} />
    </Routes>
  );
};

export default PokeData;