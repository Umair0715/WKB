import React, { useRef } from 'react';
import Img1 from 'assets/images/img1.jpg';
import useClickOutside from 'utils/clickOutside';


const AddSubCatPopup = ({ toggleAddSubCatPopup }) => {
    const formRef = useRef(null);

    useClickOutside(formRef , () =>  toggleAddSubCatPopup() )

    return (
        <div className='fixed top-0 left-0 w-full min-h-screen bg-[#00000063] flex items-center justify-center z-[9999]'
        
        >
            <div className='md:w-[70%] w-[95%] bg-pure rounded-lg border shadow-lg py-4 px-4'
            ref={formRef}
            >
                <div className='flex items-center justify-between pb-3 border-b'>
                    <div className='flex items-center gap-2 '>
                        <div className='text-lg'>
                            <i className="uil uil-plus-circle"></i>
                        </div>
                        <h3 className='font-semibold'>Add Sub Category</h3>
                    </div>
                    <div className='text-xl cursor-pointer' onClick={() => (
                        toggleAddSubCatPopup(false)
                    )} >
                        <i className="uil uil-times"></i>
                    </div>
                </div>
                <div className='mt-8'> 
                    <form className='flex flex-col gap-4'>
                        <div className='flex md:items-center justify-between gap-4 md:flex-row flex-col'>
                            <div className='flex-1 flex flex-col gap-2'>
                                <label className='text-[15px]' htmlFor="pName" >Sub Category Name (EN)</label>
                                <input 
                                id='pName'
                                type="text" 
                                placeholder='New Sub Category'
                                className='textField'
                                />
                            </div>
                            <div className='flex-1 flex flex-col gap-2'>
                                <label className='text-[15px]' htmlFor="pName" >Main Category</label>
                                <select className='textField'>
                                    <option value="">Main Category 1</option>
                                    <option value="">Main Category 2</option>
                                    <option value="">Main Category 3</option>
                                    <option value="">Main Category 4</option>
                                    <option value="">Main Category 5</option>
                                </select>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <button className="btn-primary">Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default AddSubCatPopup