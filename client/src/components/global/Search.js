import React from 'react'

const Search = () => {
    return (
        <div className='flex items-center '>
            <input 
            type="text" 
            placeholder='Search...' 
            className='border sm:py-2 py-1.5 px-4 outline-none rounded-tl-md rounded-bl-md focus:border-blue-300'
            />
            <button type='submit' className='border sm:py-2 py-[7px] px-4 rounded-tr-md rounded-br-md  border-l-0 '>
                <i className="uil uil-search"></i>
            </button>
        </div>
    )
}

export default Search