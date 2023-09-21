import { useEffect, useState } from 'react'
import usePokemonList from './usePokemonList'

function usePokemonDetails(id) {
    const [pokemon, setPokemon] = useState({})

    const downloadPokemon = async() => {
        const pokemonDataResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const pokemonData = await pokemonDataResponse.json()

        const pokemonOfSameTypes = await (await fetch(`https://pokeapi.co/api/v2/type/${pokemonData.types ? pokemonData.types[0].type.name : ''}`)).json()
        console.log(pokemonData);

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

    }

    const [pokemonListState] = usePokemonList()

    useEffect(() => {
        downloadPokemon()
    }, [])

    return [pokemon, pokemonListState]
}

export default usePokemonDetails
