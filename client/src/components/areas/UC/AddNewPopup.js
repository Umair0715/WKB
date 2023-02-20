import SelectBox from 'components/global/SelectBox';
import React, { useRef } from 'react';
import useClickOutside from 'utils/clickOutside';


const AddNewPopup = ({ toggleAddUcPopup }) => {
    const formRef = useRef(null);

    useClickOutside(formRef , () =>  toggleAddUcPopup() )

    return (
        <div className='fixed top-0 left-0 w-full min-h-screen bg-[#00000063] flex items-center justify-center z-[9999]'
        
        >
            <div className='lg:w-1/2 md:w-[70%] w-[95%] bg-pure rounded-lg border shadow-lg py-4 px-4'
            ref={formRef}
            >
                <div className='flex items-center justify-between pb-3 border-b'>
                    <div className='flex items-center gap-2 '>
                        <div className='text-lg'>
                            <i className="uil uil-plus-circle"></i>
                        </div>
                        <h3 className='font-semibold'>Add New PP</h3>
                    </div>
                    <div className='text-xl cursor-pointer' onClick={() => (
                        toggleAddUcPopup(false)
                    )} >
                        <i className="uil uil-times"></i>
                    </div>
                </div>
                <div className='mt-8'> 
                    <form className='flex flex-col gap-4'>
                        <div className='flex-1 flex flex-col gap-2'>
                            <label className='text-[15px]' htmlFor="pName" >PP Name</label>
                            <input 
                            id='pName'
                            type="text" 
                            placeholder='Enter new PP name'
                            className='textField'
                            />
                        </div>
                        <div className='flex-1 flex flex-col gap-2'>
                            <label className='text-[15px]'>Select NA</label>
                            <SelectBox 
                            options={[
                                {value : "NA123" , label : "NA123"},
                                {value : "shoes" , label : "NA124"},
                                {value : "electronics" , label : "NA125"},
                            ]} 
                            />
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