import { useState, useEffect } from "react";

export const useFavorite = () => {
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem("favoritePokemons");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("favoritePokemons", JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (pokemon) => {
        setFavorites((prev) => {
            const exists = prev.some((p) => p.id === pokemon.id);
            if (exists) {
                return prev.filter((p) => p.id !== pokemon.id);
            } else {
                return [...prev, pokemon];
            }
        });
    };

    const isFavorite = (pokemonId) =>
        favorites.some((p) => p.id === pokemonId);

    return { favorites, toggleFavorite, isFavorite };
};
