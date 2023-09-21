import { useEffect, useState } from "react"
    
function usePokemonList() {
    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        pokedexURL: "https://pokeapi.co/api/v2/pokemon",
        nextPokedexURL: '',
        prevPokedexURL: '',
        isLoading: true,
    })
     
    const downloadPokemonList = async() => {
        setPokemonListState((state) => ({...state, isLoading: true}))
    
        const response = await fetch(pokemonListState.pokedexURL) 
        const data = await response.json()
    
        setPokemonListState((state) => ({
            ...state, 
            nextPokedexURL: data.next,
            prevPokedexURL: data.previous
        }))
    
        const pokemonResults = data.results 
        // console.log(pokemonResults);

        const pokemonResultPromise = pokemonResults.map(async (pokemon) => {
            const pokeDataResponse = await fetch(pokemon.url)
            const pokeData = await pokeDataResponse.json()

            return {
                name: pokeData.name,
                weight: pokeData.weight,
                image: (pokeData.sprites.other.dream_world.front_default) 
                        ?  pokeData.sprites.other.dream_world.front_default 
                        : pokeData.sprites.front_shiny,
                id: pokeData.id,
                types: pokeData.types
            }
        })

        const pokeListResult = await Promise.all(pokemonResultPromise)     
            
        setPokemonListState((state) => ({
            ...state, 
            pokemonList: pokeListResult,
            isLoading: false
        }))
    }

    useEffect(() => {
        downloadPokemonList()
    }, [pokemonListState.pokedexURL])


    return [pokemonListState, setPokemonListState]
}

export default usePokemonList
