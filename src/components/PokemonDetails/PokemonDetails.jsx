import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function PokemonDetails() {
    const {id} = useParams()
    const [pokemon, setPokemon] = useState({})

    const downloadPokemon = async() => {
        const pokemonDataResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const pokemonData = await pokemonDataResponse.json()

        setPokemon({
            name: pokemonData.name,
            height: pokemonData.height,
            weight: pokemonData.weight,
            image: pokemonData.sprites.other.dream_world.front_default,
            types: pokemonData.types.map((t) => t.type.name),
            moves: pokemonData.moves.map((movesData) => movesData).map((movesList) => movesList.move.name).slice(0, 4).join(',')
        })

    }

    useEffect(() => {
        downloadPokemon()
    }, [])

    return (
        <div className='flex justify-center items-center '>
            <div className=' p-3 shadow-xl border-2 border-gray-200 rounded-lg flex-col justify-center items-center bg-slate-200 mx-5 mt-5 sm:mt-16'>
                <h1 className='text-center text-4xl font-mono font-bold mb-2'>{pokemon.name}</h1>

                <div className='flex justify-center'>
                    <img 
                        src={pokemon.image} 
                        className='hover:scale-150 cursor-pointer transition-all mb-2 '
                    />
                </div>

                <main className='text-lg sm:text-center text-start font-mono '>
                    <div className='border-1 border-gray-100 rounded bg-slate-300 mb-1 px-2 '>
                        Name: {` ${pokemon.name}`}
                    </div>
                    <div className='border-1 border-gray-100 rounded bg-slate-300 mb-1 px-2'>
                        Height: {pokemon.height}
                    </div>
                    <div className='border-1 border-gray-100 rounded bg-slate-300 mb-1 px-2'>
                        weight: {pokemon.weight}
                    </div>
                    <div className='border-1 border-gray-100 rounded bg-slate-300 mb-1 px-2'>
                        type: 
                        {` ${pokemon.types}`}
                    </div>
                    <div className='border-1 border-gray-100 rounded bg-slate-300 mb-1 px-2'>
                        moves: 
                        {` ${pokemon.moves}`}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default PokemonDetails
