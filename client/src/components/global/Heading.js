import React from 'react'

const Heading = ({ title , icon = true }) => {
    return (
        <h1 className='font-semibold text-2xl flex items-center gap-2'>
            { icon && <i className="uil uil-plus-circle"></i> }
            <span>{title}</span>
        </h1>
    )
}

export default Heading