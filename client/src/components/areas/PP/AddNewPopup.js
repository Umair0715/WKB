import SelectBox from 'components/global/SelectBox';
import React, { useRef } from 'react';
import useClickOutside from 'utils/clickOutside';


const AddNewPopup = ({ toggleBlockCodePopup }) => {
    const formRef = useRef(null);

    useClickOutside(formRef , () =>  toggleBlockCodePopup() )

    return (
        <div className='fixed top-0 left-0 w-full min-h-screen bg-[#00000063] flex items-center justify-center z-[9999]'
        
        >
            <div className='lg:w-[65%] md:w-[70%] w-[95%] bg-pure rounded-lg border shadow-lg py-4 px-4'
            ref={formRef}
            >
                <div className='flex items-center justify-between pb-3 border-b'>
                    <div className='flex items-center gap-2 '>
                        <div className='text-lg'>
                            <i className="uil uil-plus-circle"></i>
                        </div>
                        <h3 className='font-semibold'>Add New Block Code</h3>
                    </div>
                    <div className='text-xl cursor-pointer' onClick={() => (
                        toggleBlockCodePopup(false)
                    )} >
                        <i className="uil uil-times"></i>
                    </div>
                </div>
                <div className='mt-8'> 
                    <form className='flex flex-col gap-4'>
                        <div className="flex items-center gap-4 sm:flex-row flex-col">
                            <div className='flex-1 w-full flex flex-col gap-2'>
                                <label className='text-[15px]' htmlFor="pName" >
                                    Block Code
                                </label>
                                <input 
                                id='pName'
                                type="text" 
                                placeholder='Enter new Block Code'
                                className='textField'
                                />
                            </div>
                            <div className='flex-1 w-full flex flex-col gap-2'>
                                <label className='text-[15px]'>Select NA</label>
                                <SelectBox 
                                options={[
                                    {value : "NA123" , label : "NA123"},
                                    {value : "shoes" , label : "NA124"},
                                    {value : "electronics" , label : "NA125"},
                                ]} 
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-4 sm:flex-row flex-col">
                            <div className='flex-1 w-full flex flex-col gap-2'>
                                <label className='text-[15px]'>Select PP</label>
                                <SelectBox 
                                options={[
                                    {value : "PP123" , label : "PP123"},
                                    {value : "shoes" , label : "PP124"},
                                    {value : "electronics" , label : "PP125"},
                                ]} 
                                />
                            </div>
                            <div className='flex-1 w-full flex flex-col gap-2'>
                                <label className='text-[15px]'>Select UC</label>
                                <SelectBox 
                                options={[
                                    {value : "UC123" , label : "UC123"},
                                    {value : "shoes" , label : "UC124"},
                                    {value : "electronics" , label : "UC125"},
                                ]} 
                                />
                            </div>
                            
                        </div>
                        <div className='mt-4'>
                            <button className="btn-primary">ADD</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default AddNewPopup