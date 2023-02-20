import Search from 'components/global/Search';
import ProductsTable from 'components/products/ProductsTable';
import React from 'react'
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div className='sm:p-6 py-4 px-2'>
            <div className='flex items-center gap-4'>
                <h1 className='main-heading'>
                    <i className="uil uil-list-ul"></i>
                    <span>Product List</span>
                </h1>
                <div className='bg-gray-100 rounded-md px-2 text-xl font-semibold'>
                    27
                </div>
            </div>
            <div className='shadow-bg  mt-6'>
                <div className='flex sm:items-center justify-between sm:flex-row flex-col py-6 sm:px-4 px-2 gap-6'>
                    <form>
                        <div>
                            <Search />
                        </div>
                    </form>
                    <Link to='/product/add-new'>
                        <div className='btn-primary p-sm flex gap-2 w-fit'>
                            <i className="uil uil-plus-circle text-lg"></i>
                            <span>Add New Products</span>
                        </div>
                    </Link>
                </div>
                <div>
                    <ProductsTable />
                </div>
            </div>
        </div>
    )
}

export default Products;