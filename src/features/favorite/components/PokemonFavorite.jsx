import React from "react";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

function PokemonFavorite() {

    const navigate = useNavigate();


    const handleClick = () => {
        navigate('/list-favorites');
    }
    return (
        <Button
            variant="outlined"
            className="rounded-lg "
            onClick={handleClick}
        >
            View Favorites
        </Button>
    )
}

export default PokemonFavorite;