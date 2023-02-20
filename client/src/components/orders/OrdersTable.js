import React, { useRef, useState } from 'react'
import useClickOutside from 'utils/clickOutside';

const OrdersTable = () => {
    const dropMenuRef = useRef(null);
    const [showDropMenu , setShowDropMenu] = useState(false);
    const [selectedMenuIndex , setSelectedMenuIndex]  = useState(0);
    

    useClickOutside(dropMenuRef , () => setShowDropMenu(false));

    return (
        <div className="overflow-x-auto rounded-lg">
            <table className="w-full table-auto overflow-x-auto ">
                <thead className="bg-lightSlate border-b text-[13px]">
                    <tr>
                        <th scope="col" className=" font-medium text-gray-900 px-6 py-4 text-left">
                            #
                        </th>
                        <th scope="col" className=" font-medium text-gray-900 px-6 py-4 text-left">
                            ORDER
                        </th>
                        <th scope="col" className=" font-medium text-gray-900 px-6 py-4 text-left">
                            DATE
                        </th>
                        <th scope="col" className=" font-medium text-gray-900 px-6 py-4 text-center">
                            CUSTOMER
                        </th>
                        <th scope="col" className=" font-medium text-gray-900 px-6 py-4 text-center">
                            BRANCH
                        </th>
                        <th scope="col" className=" font-medium text-gray-900 px-6 py-4 text-center">
                            PAYMENT STATUS
                        </th>
                        <th scope="col" className=" font-medium text-gray-900 px-6 py-4 text-center">
                            TOTAL
                        </th>
                        <th scope="col" className=" font-medium text-gray-900 px-6 py-4 text-center">
                            ORDER STATUS
                        </th>   
                        <th scope="col" className=" font-medium text-gray-900 px-6 py-4 text-center">
                            ACTIONS
                        </th>
                    </tr>
                </thead>
                <tbody className='text-[13px]'>
                   {
                        [...Array(6).keys()].map((item , i) => (
                            <tr className="bg-white border-b transition duration-300 ease-in-out">
                            <td className="px-6 py-4 whitespace-nowrap  font-medium text-gray-900">{i}</td>
                            <td className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                10045   
                            </td>
                            <td className=" text-gray-900  px-6 py-4 whitespace-nowrap">
                                17 Nov 2022
                            </td>
                            <td className=" text-gray-900  px-6 py-4 whitespace-nowrap">
                                Mehedi Hassan
                            </td>
                            <td className=" text-gray-900  px-6 py-4 whitespace-nowrap">
                                <div className='bg-purple-100 text-primary text-xs px-2 rounded-md flex items-center gap-2 py-1 font-medium w-fit'>
                                    Main Branch
                                </div>
                            </td>
                            <td className=" text-gray-900  px-6 py-4 whitespace-nowrap">
                                <div className='bg-red-100 text-red-500 text-xs px-2 rounded-md flex items-center gap-2 py-1 font-medium w-fit'>
                                    <p className='bg-red-500 w-2 h-2 rounded-full'></p>
                                    <span>Unpaid</span>
                                </div>
                            </td>
                            <td className=" text-gray-900  px-6 py-4 whitespace-nowrap">
                                1,267.19$
                            </td>
                            <td className=" text-gray-900  px-6 py-4 whitespace-nowrap">
                                <div className='bg-cyan-100 text-cyan-500 text-xs px-2 rounded-md flex items-center gap-2 py-1 font-medium w-fit'>
                                    <p className='bg-cyan-500 w-2 h-2 rounded-full'></p>
                                    <span>Unpaid</span>
                                </div>
                            </td>
                            <td className=" text-gray-900  px-6 py-4 whitespace-nowrap ">
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
                                            <div className='py-3 font-medium hover:bg-gray-100 px-4 cursor-pointer flex items-center gap-1'>
                                                <i className="uil uil-eye text-lg"></i>
                                                <span>View</span>
                                            </div>
                                            {/* <div className='py-3 font-medium hover:bg-gray-100 px-4 cursor-pointer'>
                                                Delete
                                            </div> */}
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

export default OrdersTable;