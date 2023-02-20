import React, { useRef, useState } from 'react'
import useClickOutside from 'utils/clickOutside';

const NA_list = () => {
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
                            UC
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            PP
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            NA
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-right ">
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
                                UC123
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                PP123
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                NA123
                            </td>
                            
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap  ">
                                <div className='flex items-end justify-end relative' 
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
            
        </div>
    )
}

export default NA_list;