// import React from 'react';


// const PokemonDetail = () => {
//   return (
//     <></>
//   );
// }

// export default PokemonDetail;
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import typeColors from "../../pokemonList/utils/typeColor";

const PokemonDetail = ({ pokemon }) => {
  const [selectedTab, setSelectedTab] = useState("stats");

  // Assuming the pokemon object contains details such as stats, abilities, etc.
  const { stats, abilities, moves, evolutionChain } = pokemon;

  return (
    <DetailWrapper>
      <Header>
        <img src={pokemon.image} alt={pokemon.name} className="pokemon-image" />
        <div className="pokemon-info">
          <h1 className="pokemon-name">{pokemon.name}</h1>
          <p className="pokemon-id">#{pokemon.id}</p>
          <div className="pokemon-types">
            {pokemon.types.map((type, idx) => (
              <span
                key={idx}
                className={`type-tag ${typeColors[type] || "bg-gray-200 text-gray-800"}`}
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </Header>

      <TabNavigation>
        <button onClick={() => setSelectedTab("stats")} className={selectedTab === "stats" ? "active" : ""}>
          Stats
        </button>
        <button onClick={() => setSelectedTab("abilities")} className={selectedTab === "abilities" ? "active" : ""}>
          Abilities
        </button>
        <button onClick={() => setSelectedTab("moves")} className={selectedTab === "moves" ? "active" : ""}>
          Moves
        </button>
        <button onClick={() => setSelectedTab("evolution")} className={selectedTab === "evolution" ? "active" : ""}>
          Evolution
        </button>
      </TabNavigation>

      <MainContent>
        {selectedTab === "stats" && (
          <Stats>
            {stats.map((stat) => (
              <div key={stat.name} className="stat">
                <span className="stat-name">{stat.name}</span>
                <span className="stat-value">{stat.value}</span>
              </div>
            ))}
          </Stats>
        )}

        {selectedTab === "abilities" && (
          <Abilities>
            {abilities.map((ability) => (
              <div key={ability.name} className="ability">
                <span className="ability-name">{ability.name}</span>
                <p>{ability.description}</p>
              </div>
            ))}
          </Abilities>
        )}

        {selectedTab === "moves" && (
          <Moves>
            {moves.map((move) => (
              <div key={move.name} className="move">
                <span className="move-name">{move.name}</span>
                <p>{move.description}</p>
              </div>
            ))}
          </Moves>
        )}

        {selectedTab === "evolution" && (
          <EvolutionChain>
            {evolutionChain.map((evolution) => (
              <div key={evolution.id} className="evolution">
                <img src={evolution.image} alt={evolution.name} className="evolution-image" />
                <span className="evolution-name">{evolution.name}</span>
              </div>
            ))}
          </EvolutionChain>
        )}
      </MainContent>
    </DetailWrapper>
  );
};

// Styled Components

const DetailWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  .pokemon-image {
    width: 150px;
    height: 150px;
    margin-right: 20px;
  }

  .pokemon-info {
    .pokemon-name {
      font-size: 2rem;
      font-weight: bold;
    }

    .pokemon-id {
      font-size: 1.2rem;
      color: gray;
    }

    .pokemon-types {
      margin-top: 10px;

      .type-tag {
        display: inline-block;
        margin-right: 5px;
        padding: 5px 10px;
        border-radius: 12px;
        font-size: 0.9rem;
      }
    }
  }
`;

const TabNavigation = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  button {
    padding: 10px 20px;
    margin: 0 10px;
    border: none;
    background-color: transparent;
    font-size: 1rem;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;

    &:hover {
      border-color: #ccc;
    }

    &.active {
      border-color: #FF5353;
      font-weight: bold;
    }
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Stats = styled.div`
  .stat {
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    border-bottom: 1px solid #eee;
  }

  .stat-name {
    font-weight: bold;
  }
`;

const Abilities = styled.div`
  .ability {
    margin-bottom: 20px;
  }

  .ability-name {
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const Moves = styled.div`
  .move {
    margin-bottom: 20px;
  }

  .move-name {
    font-weight: bold;
  }
`;

const EvolutionChain = styled.div`
  display: flex;
  flex-wrap: wrap;

  .evolution {
    margin-right: 20px;
    text-align: center;

    .evolution-image {
      width: 100px;
      height: 100px;
      margin-bottom: 10px;
    }
  }
`;

export default PokemonDetail;
