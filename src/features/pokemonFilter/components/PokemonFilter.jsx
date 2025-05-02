import React, { useState, useRef, useEffect } from "react";
import { usePokemonFilterContext } from "../context/usePokemonFilterContext";
import Button from "../../../components/Button";

const types = ["normal", "fire", "water", "electric", "grass", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"];

function PokemonFilter() {
  const { typeFilter, setTypeFilter } = usePokemonFilterContext();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const toggleType = (type) => {
    if (typeFilter.includes(type)) {
      setTypeFilter(typeFilter.filter(t => t !== type));
    } else {
      setTypeFilter([...typeFilter, type]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <Button
        onClick={toggleDropdown}
        variant="outlined"
        className=" px-3 py-2 rounded-lg"
        size="md"
      >
        Filter by Type
      </Button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-56 bg-white shadow-lg rounded p-4 border max-h-64 overflow-y-auto">
          {types.map((type) => (
            <label key={type} className="flex items-center space-x-2 mb-2">
              <input
                type="checkbox"
                checked={typeFilter.includes(type)}
                onChange={() => toggleType(type)}
                className="form-checkbox h-4 w-4"
              />
              <span className="capitalize">{type}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default PokemonFilter;
