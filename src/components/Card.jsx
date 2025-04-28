import React from "react";
import typeColors from "../utils/typesColors";

function Card({ pokemon }) {
    return (
        <>
            <div
                key={pokemon.id}
                className="bg-blue-50 rounded-xl shadow-md p-4 flex flex-col items-left hover:shadow-lg hover:scale-105 transition duration-300 transform cursor-pointer opacity-95"
            >
                <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    className="mb-2 bg-gray-200 rounded-lg"
                />
                <p className="text-sm text-gray-500">#{pokemon.id}</p>
                <h2 className="text-lg font-semibold capitalize text-gray-700">{pokemon.name}</h2>
                <div className="flex flex-wrap gap-1">
                    {pokemon.types.map((type, idx) => (
                        <span
                            key={idx}
                            className={`text-xs font-medium px-2 py-1 rounded-lg ${typeColors[type] || "bg-gray-200 text-gray-800"}`}
                        >
                            {type}
                        </span>
                    ))}
                </div>
            </div>
        </>
    )
}


export default Card;