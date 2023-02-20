import React from 'react'

const ReviewRating = () => {
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2  text-sm text-grayText'>
                <div className='w-[50px] text-[15px]'>5 star</div>
                <div className=' w-full h-3 bg-gray-200 rounded-full relative'>
                    <div className='absolute top-0 left-0 w-1/2 bg-yellow-400 rounded-full h-full '></div>
                </div>
                <div className='flex-[0.08] text-right'>50%</div>
            </div>
            <div className='flex items-center gap-2  text-sm text-grayText'>
                <div className='w-[50px] text-[15px]'>4 star</div>
                <div className=' w-full h-3 bg-gray-200 rounded-full relative'>
                    <div className='absolute top-0 left-0 w-1/2 bg-yellow-400 rounded-full h-full '></div>
                </div>
                <div className='flex-[0.08] text-right'>50%</div>
            </div>
            <div className='flex items-center gap-2  text-sm text-grayText'>
                <div className='w-[50px] text-[15px]'>3 star</div>
                <div className=' w-full h-3 bg-gray-200 rounded-full relative'>
                    <div className='absolute top-0 left-0 w-1/2 bg-yellow-400 rounded-full h-full '></div>
                </div>
                <div className='flex-[0.08] text-right'>50%</div>
            </div>
            <div className='flex items-center gap-2  text-sm text-grayText'>
                <div className='w-[50px] text-[15px]'>2 star</div>
                <div className=' w-full h-3 bg-gray-200 rounded-full relative'>
                    <div className='absolute top-0 left-0 w-1/2 bg-yellow-400 rounded-full h-full '></div>
                </div>
                <div className='flex-[0.08] text-right'>50%</div>
            </div>
            <div className='flex items-center gap-2  text-sm text-grayText'>
                <div className='w-[50px] text-[15px]'>1 star</div>
                <div className=' w-full h-3 bg-gray-200 rounded-full relative'>
                    <div className='absolute top-0 left-0 w-1/2 bg-yellow-400 rounded-full h-full '></div>
                </div>
                <div className='flex-[0.08] text-right'>50%</div>
            </div>
            
        </div>
    )
}

export default ReviewRating;