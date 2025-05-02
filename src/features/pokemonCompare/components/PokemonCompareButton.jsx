import React from "react";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
function PokemonCompareButton(){

    const navigate = useNavigate();


    const handleClick = () => {
        navigate('/compare-random');
    
    }
    return (
        <Button 
            variant="outlined"
            className="rounded-lg"
            onClick={handleClick}
        >
            Compare Pokemons
        </Button>
    )
}

export default PokemonCompareButton;