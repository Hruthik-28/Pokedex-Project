import { useParams } from 'react-router-dom'
import usePokemonDetails from '../../hooks/usePokemonDetails'

function PokemonDetails({pokemonName}) {
    const {id} = useParams()
    const [pokemon] = usePokemonDetails(id, pokemonName)
    // console.log(pokemon);

    return (
        <div className='flex-col justify-center  items-center sm:mx-96 '>
            <div className=' p-3 shadow-xl border-2 border-gray-200 rounded-lg flex-col justify-center items-center bg-slate-200 mx-5 mt-2 sm:mt-5'>
                <h1 className='text-center text-4xl font-mono font-bold mb-2'>{pokemon.name}</h1>

                <div className='flex justify-center'>
                    <img 
                        src={pokemon.image} 
                        className='hover:scale-125 cursor-pointer transition-all mb-2 '
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
            <div className='text-center font-mono my-4 p-3 shadow-xl border-2 border-gray-200 bg-slate-200 rounded-lg mx-4'>
            {
                pokemon.types && pokemon.sameTypePokemons && 
                <div>
                   <h1 className='text-lg text-black'> MORE {pokemon.types[0].toUpperCase()} TYPE POKEMONS</h1>
                    <ul>
                    {
                        pokemon.sameTypePokemons.map((p, idx) => 
                            <li key={idx}> 
                                    {p}
                            </li>
                        )
                    }
                    </ul>
                </div>
            }
            </div>
        </div>
    )
}

export default PokemonDetails
