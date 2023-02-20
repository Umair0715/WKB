import React from 'react'

const Header = () => {
    return (
        <div className='flex items-center justify-between py-6'>
            <div className='flex flex-col gap-1 '>
                <h1 className='text-2xl font-semibold'>Welcome, Admin.</h1>
                <p className='sm:w-full w-[90%] sm:text-base text-[15px]'>Welcome Admin, here is your business statistics.</p>
            </div>
            <div className='bg-green-100 text-green-500 rounded-lg py-[1px] px-2 text-xs   sm:block hidden'>
                <span>Software Version:6.2</span>
            </div>
        </div>
    )
}

export default Header