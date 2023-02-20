import React, { useRef, useState } from 'react'
import useClickOutside from 'utils/clickOutside';
import AddSubCatPopup from './AddSubCatPopup';

const SubCategoryTable = ({ showAddSubCatPopup , toggleAddSubCatPopup }) => {
    const dropMenuRef = useRef(null);
    const [showDropMenu , setShowDropMenu] = useState(false);
    const [selectedMenuIndex , setSelectedMenuIndex]  = useState(0);
    

    useClickOutside(dropMenuRef , () => setShowDropMenu(false));

    return (
        <div className="overflow-x-auto bg-pure mt-8 mb-6 rounded-lg border shadow-md pb-20">
            <table className="w-full table-auto">
                <thead className="bg-lightSlate border-b">
                    <tr>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            #
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            MAIN CATEGORY
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            SUB CATEGORY
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            STATUS
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                            ACTION
                        </th>
                    </tr>
                </thead>
                <tbody>
                   {
                        [...Array(6).keys()].map((item , i) => (
                            <tr className="bg-white border-b transition duration-300 ease-in-out">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{i}</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                Boys
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                Shirt
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                <p className='border py-2.5 px-3 flex items-center gap-2 cursor-pointer'>
                                    <div 
                                    className='bg-green-500 rounded-full w-[7px] h-[7px] '></div>
                                    <span>Active</span>
                                </p>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                                <div className='flex items-end justify-center relative' 
                                >  
                                    <div className='bg-gray-500 py-1.5 px-4 flex items-center rounded-md text-pure gap-2 text-lg w-fit cursor-pointer'
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setShowDropMenu(prev => !prev);
                                        setSelectedMenuIndex(i);
                                    }}
                                    >
                                        <div><i className="uil uil-setting"></i></div>
                                        <div><i className="uil uil-angle-down"></i></div>
                                    </div>
                                    {/* DROP MENU */}
                                    {   
                                        showDropMenu && selectedMenuIndex === i &&
                                        <div className='absolute top-10  bg-pure shadow-lg w-[120px] h-auto rounded-lg z-[50] border flex flex-col'
                                        ref={dropMenuRef}
                                        >
                                            <div className='py-3 font-medium hover:bg-gray-100 px-4 cursor-pointer'>
                                                Edit
                                            </div>
                                            <div className='py-3 font-medium hover:bg-gray-100 px-4 cursor-pointer'>
                                                Delete
                                            </div>
                                        </div>
                                    }
                                </div>
                            </td>
                        </tr>
                        ))
                   }
                
                </tbody>
            </table>
            {
                showAddSubCatPopup && 
                <div>
                    <AddSubCatPopup 
                    toggleAddSubCatPopup={toggleAddSubCatPopup}
                    />
                </div>
            }
        </div>
    )
}

export default SubCategoryTable;