import React, { useState, useEffect } from 'react';
import './fonts/fonts.css';
import './Deck.css';

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
        <div>
            <h2>Pokedex</h2>
            <div className="pokemon-container">
                {pokemonList.map((pokemon, index) => (
                    <div key={index} className="pokemon-card">
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                            alt={pokemon.name}
                        />
                        <p>{pokemon.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Deck;
