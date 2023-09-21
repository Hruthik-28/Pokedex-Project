import React from 'react'
import { Link } from 'react-router-dom'

function Pokemon({name, image, id}) {
    return (
        <div className='w-36 sm:w-60 border-2 border-gray-200 shadow-md rounded-3xl flex justify-center p-2 '>
            <Link to={`/pokemon/${id}`}>
                <div className='mb-2 text-xl font-mono'>{name}</div>
                <img src={image} className='hover:scale-75 transition-all cursor-pointer flex justify-center sm:h-60 h-28'/>
            </Link>
        </div>
    )
}

export default Pokemon
