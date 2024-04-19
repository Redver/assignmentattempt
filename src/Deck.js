import React, { useState, useEffect } from 'react';
import './fonts/fonts.css';

function Deck() {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        fetchPokemon();
    }, []);

    const fetchPokemon = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await response.json();
        setPokemonList(data.results);
    };

    return (

    );
}

export default Deck;
