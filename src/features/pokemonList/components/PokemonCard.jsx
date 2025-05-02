import React from "react";
import typeColors from "../utils/typeColor";
import FavoriteShape from "../../favorite/components/FavoriteShape";
import { useFavorite } from "../../favorite/hooks/useFavorite";
import { useNavigate } from "react-router-dom";

function PokemonCard({ pokemon }) {

    const { toggleFavorite, isFavorite } = useFavorite();
    if (!pokemon || !pokemon.id || !pokemon.name) return null;
    const navigate = useNavigate();


    const handleCardClick = () => {
        navigate(`/pokemon-details/${pokemon.id}`);
    }
    return (
        <div
            key={pokemon.id}
            className="relative bg-blue-50 rounded-xl shadow-md p-4 flex flex-col items-left hover:shadow-lg hover:scale-105 transition duration-300 transform cursor-pointer opacity-95"
        >
            <img
                onClick={handleCardClick}

                src={pokemon.image}
                alt={pokemon.name}
                className="mb-2 bg-gray-200 rounded-lg"
            />
            <div onClick={handleCardClick}>
            <p className="text-sm text-gray-500">#{pokemon.id}</p>
            <h2 className="text-lg font-semibold capitalize text-gray-700">{pokemon.name}</h2>
            <div className="flex flex-wrap gap-1">
                {(pokemon.types ?? []).map((type, idx) => (
                    <span
                        key={idx}
                        className={`text-xs font-medium px-2 py-1 rounded-lg ${typeColors[type] || "bg-gray-200 text-gray-800"
                            }`}
                    >
                        {type}
                    </span>
                ))}
            </div>
            </div>
            <div
                className="absolute bottom-2 right-2"
                title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            >
                <FavoriteShape
                    isChecked={isFavorite(pokemon.id)}
                    onToggle={(e) => {
                        e.stopPropagation();
                        toggleFavorite(pokemon)
                    }}
                />
            </div>
        </div>
    );
}

export default PokemonCard;
