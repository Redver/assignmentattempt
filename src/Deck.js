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
        const shadow = document.getElementById(`shadow-${index}`);
        const rect = card.getBoundingClientRect();
        const tiltX = (rect.top + rect.height / 2 - e.clientY) / 3;
        const tiltY = (e.clientX - rect.left - rect.width / 2) / 3;
        card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        shadow.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateX(${tiltY * -0.5}px) translateY(${tiltX * 0.5}px)`;
        shadow.style.visibility = 'visible';
    };

    const handleMouseLeave = (index) => {
        const card = document.getElementById(`pokemon-card-${index}`);
        const shadow = document.getElementById(`shadow-${index}`);
        card.style.transform = 'none';
        shadow.style.transform = 'none';
        shadow.style.visibility = 'hidden';
    };

    return (
        <div>
            <h2>Pokedex</h2>
            <div className="pokemon-container">
                {pokemonList.map((pokemon, index) => (
                    <div
                        key={index}
                        className="pokemon-wrapper"
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        <div className="pokemon-card" id={`pokemon-card-${index}`}>
                            <div className="pokemon-content">
                                <img
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                                    alt={pokemon.name}
                                />
                                <p>{capitaliseStart(pokemon.name)}</p>
                            </div>
                        </div>
                        <div className="shadow" id={`shadow-${index}`}></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Deck;
