import { Link } from 'react-router-dom';

const ServeyHistory = () => {
    return (
        <div className='sm:p-6 py-4 px-2'>
            <h1 className='main-heading'>Servey History</h1>
            <div className='shadow-bg mt-6'>
                <div className='pb-12 overflow-x-auto'>
                    <table className="w-full table-auto overflow-x-auto">
                        <thead className="bg-lightSlate border-b">
                            <tr>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    #
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Block Incharge
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Team Member
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Servey Person
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-right">
                                    Total Votes
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                [...Array(6).keys()].map((item , i) => (
                                    <tr className="bg-white border-b transition duration-300 ease-in-out">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {i+1}
                                    </td>
                                    <td className="text-sm text-primary px-6 py-4 whitespace-nowrap font-normal">
                                        <Link to={`/product/details/${i+1}`}>
                                             WKB 
                                        </Link>
                                    </td>
                                    <td className="text-sm text-primary px-6 py-4 whitespace-nowrap font-medium">
                                        <Link to='#'>
                                            Habib Rehman
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                                        Ahmad Raza
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-right">
                                        <div className='flex justify-end'>
                                            <div className='bg-cyan-100 text-cyan-500 w-fit px-2 rounded-md flex items-center gap-1'>
                                                <span>5</span>
                                                <i className="uil uil-star"></i>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                ))
                        }
                        
                        </tbody>
                    </table> 
                </div>

            </div>
        </div>
    )
}

export default ServeyHistory;