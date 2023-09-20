import React from 'react'

function Pokemon({name, image}) {
    return (
        <div className='w-60 border-2 border-gray-200 shadow-md rounded-3xl flex flex-col justify-center p-2 '>
            <div className='mb-2 text-xl font-mono'>{name}</div>
            <img src={image} className='hover:scale-125 transition-all cursor-pointer flex justify-center max-h-52 http://localhost:5173/'/>
        </div>
    )
}

export default Pokemon
