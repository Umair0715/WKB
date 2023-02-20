import React, { useRef } from 'react';
import Img1 from 'assets/images/img1.jpg';
import useClickOutside from 'utils/clickOutside';


const AddMainCatPopup = ({ toggleAddCatPopup }) => {
    const imgRef = useRef();
    const bannerImgRef = useRef();
    const formRef = useRef(null);

    useClickOutside(formRef , () =>  toggleAddCatPopup() )

    return (
        <div className='fixed top-0 left-0 w-full min-h-screen bg-[#00000063] flex items-center justify-center z-[9999]'
        
        >
            <div className='md:w-[70%] w-[95%]  overflow-auto bg-pure rounded-lg border shadow-lg py-4 px-4'
            ref={formRef}
            >
                <div className='flex items-center justify-between pb-3 border-b'>
                    <div className='flex items-center gap-2 '>
                        <div className='text-lg'>
                            <i className="uil uil-plus-circle"></i>
                        </div>
                        <h3 className='font-semibold'>Add New Category</h3>
                    </div>
                    <div className='text-xl cursor-pointer' onClick={() => (
                        toggleAddCatPopup(false)
                    )} >
                        <i className="uil uil-times"></i>
                    </div>
                </div>
                <div className='mt-8 h-[75vh] overflow-auto'> 
                    <form className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[15px]' htmlFor="pName" >Name (EN)</label>
                            <input 
                            id='pName'
                            type="text" 
                            placeholder='New Category'
                            className='textField'
                            />
                        </div>
                        <div className='flex md:flex-row flex-col items-center gap-4 text-[15px]'>
                            <div className='flex flex-col gap-4'>
                                <div className='flex-1 flex flex-col gap-2'>
                                    <label className='text-[15px]'>Image *</label>
                                    <input id='pName'type='file'hidden ref={imgRef}/>
                                    <div className='flex items-center justify-between border sm:px-3 px-2 rounded-md cursor-pointer'
                                    onClick={() => (
                                        imgRef.current.click()
                                    )}
                                    > 
                                        <div>Choose File</div>
                                        <div className='py-3 sm:px-6 px-4 border-l'>Browse</div>
                                    </div>
                                </div>
                                <div className='flex-1 flex items-center justify-center '>
                                    <img src={Img1} alt="" className='rounded-lg' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <div className='flex-1 flex flex-col gap-2'>
                                    <label className='text-[15px]'>Banner Image *</label>
                                    <input id='pName'type='file'hidden ref={bannerImgRef}/>
                                    <div className='flex items-center justify-between border sm:px-3 px-2 rounded-md cursor-pointer'
                                        onClick={() => (
                                            bannerImgRef.current.click()
                                        )}
                                    > 
                                        <div>Choose File</div>
                                        <div className='py-3 sm:px-6 px-4 border-l'>Browse</div>
                                    </div>
                                </div>
                                <div className='flex-1'>
                                    <img src={Img1} alt="" className='rounded-lg' />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between gap-4'>
                            
                           
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

export default AddMainCatPopup