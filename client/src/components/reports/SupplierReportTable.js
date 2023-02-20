import React from 'react'

const SupplierReportTable = () => {
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
                    <th scope="col" className=" font-medium text-gray-900 px-6 py-4 text-left">
                        CUSTOMER
                    </th>
                    <th scope="col" className=" font-medium text-gray-900 px-6 py-4 text-left">
                        QTY
                    </th>
                    <th scope="col" className=" font-medium text-gray-900 px-6 py-4 text-left">
                        Order Status
                    </th>
                    <th scope="col" className=" font-medium text-gray-900 px-6 py-4 text-left">
                        AMOUNT
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
                            5
                        </td>
                        <td className=" text-green-600  px-6 py-4 whitespace-nowrap">
                            Paid
                        </td>
                        <td className=" text-gray-900  px-6 py-4 whitespace-nowrap">
                            1,267.19$
                        </td>
                 
                        
                    </tr>
                    ))
               }
            
            </tbody>
        </table>
       
    </div>
    )
}

export default SupplierReportTable;