import React, { useState, useEffect } from 'react';
import './fonts/fonts.css';
import './Deck.css';


function Deck() {
    const [pokemonList, setPokemonList] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        fetchPokemon();
    }, []);

    const fetchPokemon = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await response.json();
        setPokemonList(data.results);
    };

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const handleCardClick = (pokemonName) => {
        console.log(`Clicked on ${pokemonName}`);
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div>
            <h2>Pokedex</h2>
            <div className="pokemon-container">
                {pokemonList.map((pokemon, index) => (
                    <div
                        key={index}
                        className={`pokemon-card ${hoveredIndex === index ? 'hovered' : ''}`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleCardClick(pokemon.name)}
                    >
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                            alt={pokemon.name}
                        />
                        <p>{capitalizeFirstLetter(pokemon.name)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Deck;
