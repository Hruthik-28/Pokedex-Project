import { useEffect, useState } from 'react'

function usePokemonDetails(id, pokemonName) {
    const [pokemon, setPokemon] = useState({})

    const downloadPokemon = async() => {
        try {
            let pokemonData;
            if (pokemonName) {
                const pokemonDataResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
                pokemonData = await pokemonDataResponse.json()
            }else {
                const pokemonDataResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                pokemonData = await pokemonDataResponse.json()
            }

            const pokemonOfSameTypes = await (await fetch(`https://pokeapi.co/api/v2/type/${pokemonData.types ? pokemonData.types[0].type.name : ''}`)).json()

            setPokemon((state) => ({ 
                ...state,
                name: pokemonData.name,
                height: pokemonData.height,
                weight: pokemonData.weight,
                image: pokemonData.sprites.other.dream_world.front_default,
                types: pokemonData.types.map((t) => t.type.name),
                moves: pokemonData.moves.map((movesData) => movesData).map((movesList) => movesList.move.name).slice(0, 4),
                sameTypePokemons: pokemonOfSameTypes.pokemon.map((p) => p.pokemon.name).slice(1, 6),
            }))
        } catch (error) {
            console.log(error.message);
        }

    }

    const [pokemonListState, setPokemonListState] = useState()

    useEffect(() => {
        downloadPokemon()
    }, [])

    return [pokemon, pokemonListState]
}

export default usePokemonDetails
