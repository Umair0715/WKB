import React from 'react'

const ReviewsTable = () => {
    return (
        <div className="overflow-x-auto bg-pure mt-8 mb-6 rounded-lg border shadow-md pb-12">
            <table className="w-full table-auto">
                <thead className="bg-lightSlate border-b">
                    <tr>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            REVIEWER
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            REVIEW
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-right">
                            DATE
                        </th>
                        
                    </tr>
                </thead>
                <tbody>
                   {
                        [...Array(6).keys()].map((item , i) => (
                            <tr className="bg-white border-b transition duration-300 ease-in-out">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                Alexander
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                Nice
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-right">
                                25/11/2022
                            </td>
                        </tr>
                        ))
                   }
                
                </tbody>
            </table>
        </div>
    )
}

export default ReviewsTable