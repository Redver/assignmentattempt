import React, { useState, useEffect } from 'react';
import './fonts/fonts.css';
import './Deck.css';


function Deck() {
    const [pokemonList, setPokemonList] = useState([]);

    const capitaliseStart = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    useEffect(() => {
        fetchPokemon();
    }, []);

    const fetchPokemon = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await response.json();
        setPokemonList(data.results);
    };

    const handleMouseMove = (e, index) => {
        const card = document.getElementById(`pokemon-card-${index}`);
        const rect = card.getBoundingClientRect();
        const tiltX = (rect.top + rect.height / 2 - e.clientY) / 3; // Calculate tilt based on vertical mouse position
        const tiltY = (e.clientX - rect.left - rect.width / 2) / 3; // Calculate tilt based on horizontal mouse position
        card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`; // Apply the calculated tilt

        const shadow = card.querySelector('.pokemon-shadow');
        shadow.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(5px)`; // Adjust the shadow position based on tilt
    };

    const handleMouseLeave = (index) => {
        const card = document.getElementById(`pokemon-card-${index}`);
        card.style.transform = 'none'; // Reset the tilt when mouse leaves the card

        const shadow = card.querySelector('.pokemon-shadow');
        shadow.style.transform = 'none'; // Reset the shadow position
    };

    return (
        <div>
            <h2>Pokedex</h2>
            <div className="pokemon-container">
                {pokemonList.map((pokemon, index) => (
                    <div
                        key={index}
                        id={`pokemon-card-${index}`}
                        className="pokemon-card"
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        <div className="pokemon-content">
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                                alt={pokemon.name}
                            />
                            <p>{capitaliseStart(pokemon.name)}</p>
                        </div>
                        <div className="pokemon-shadow"></div> {/* Shadow element */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Deck;