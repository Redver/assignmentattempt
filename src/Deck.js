import React, { useState, useEffect } from 'react';
import './fonts/fonts.css';
import './Deck.css';

function Deck() {
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

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

    const handleCardClick = async (pokemon) => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        setSelectedPokemon(data);
    };

    const handleClosePopup = () => {
        setSelectedPokemon(null);
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
                        <div className="pokemon-card" onClick={() => handleCardClick(pokemon)} id={`pokemon-card-${index}`}>
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
            {selectedPokemon && (
                <div className="popup-overlay" onClick={handleClosePopup}>
                    <div className="popup-card">
                        <div className="pokemon-info">
                            <h3>{capitaliseStart(selectedPokemon.name)}</h3>
                            <img
                                className="pokemon-image"
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${selectedPokemon.id}.png`}
                                alt={selectedPokemon.name}
                            />
                            <h4>Abilities:</h4>
                            <ul>
                                {selectedPokemon.abilities.map((ability, index) => (
                                    <li key={index}>{capitaliseStart(ability.ability.name)}</li>
                                ))}
                            </ul>
                            <h4>Type:</h4>
                            <ul>
                                {selectedPokemon.types.map((type, index) => (
                                    <li key={index}>{capitaliseStart(type.type.name)}</li>
                                ))}
                            </ul>
                            <h4>Stats:</h4>
                            <ul>
                                {selectedPokemon.stats.map((stat, index) => (
                                    <li key={index}>{capitaliseStart(stat.stat.name)}: {stat.base_stat}</li>
                                ))}
                            </ul>
                            <p>Height: {selectedPokemon.height}</p>
                            <p>Weight: {selectedPokemon.weight}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Deck;
