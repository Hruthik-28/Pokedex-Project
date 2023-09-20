import React, { useEffect, useState } from 'react'
import Pokemon from '../pokemon/Pokemon'

function PokemonList() {
    const [pokemonList, setPokemonList] = useState([])
    const [pokedexURL, setpokedexURL] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPokedexURL, setNextPokedexURL] = useState("")
    const [prevPokedexURL, setPrevPokedexURL] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    const downloadPokemonList = async() => {
        setIsLoading(true)

        const response = await fetch(pokedexURL) 
        const data = await response.json()

        setNextPokedexURL(data.next) 
        setPrevPokedexURL(data.previous)

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
        setPokemonList(pokeListResult)
        setIsLoading(false)

    }

    useEffect(() => {
        downloadPokemonList()
    }, [pokedexURL])

    return (
        <div>
            <h2 className='text-3xl text-center mb-5'>Pokemon List</h2>
            <div className='max-w-screen-2xl flex flex-wrap justify-center gap-3 sm:gap-5 items-center text-center mb-7 sm:flex-row flex-row'>
            {
                (isLoading) ? "Data loading.....": 
                pokemonList.map((poke) => <Pokemon name={poke.name} image={poke.image} key={poke.id} id={poke.id}/>)
                
            }
            </div>
            <div className='flex justify-center items-center gap-5'>
                <button
                className='border-2 border-gray-200 rounded-lg px-5 py-2 text-xl mb-5 hover:bg-slate-100'
                disabled={!prevPokedexURL}
                onClick={() => setpokedexURL(prevPokedexURL)}
                >
                    Prev
                </button>
                <button 
                className='border-2 border-gray-200 rounded-lg px-5 py-2 text-xl mb-5 hover:bg-slate-100'
                disabled={!nextPokedexURL}
                onClick={() => setpokedexURL(nextPokedexURL)}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default PokemonList
