import React from 'react'
import { useNavigate } from 'react-router-dom';
import Img1 from 'assets/images/img1.jpg';
import ReviewRating from 'components/products/ReviewRating';
import ReviewsTable from 'components/products/ReviewsTable';


const ProductDetails = () => {
    const navigate = useNavigate();

    return (
        <div className='sm:p-6 py-4 px-2'>
            <div className='flex items-center justify-between '>
                <h3 className='main-heading'>Watch</h3>
                <button className="btn-primary" 
                onClick={() => navigate(-1)}
                >
                    Back
                </button>
            </div>
            {/* PRODUCT REVIEWS */}
            <div className='mt-6'>
                <h4 className='text-primary'>Product Reviews</h4>
                <div className='shadow-bg sm:p-5 py-3 px-3 mt-2'>
                    <div className='flex lg:items-center lg:flex-row flex-col gap-6 border-b pb-6'>
                        <div className='flex-[0.4] flex items-center gap-4'>
                            <div className='flex-1'>
                                <img 
                                src={Img1} 
                                alt="Product" 
                                className='w-[200px] h-[170px] object-cover rounded-md'
                                />
                            </div>
                            <div className='flex-1'>
                                <span className='text-5xl font-semibold'>0</span>
                                <p className='mt-2 text-grayText'>of 0 Reviews</p>
                            </div>
                        </div>
                        <div className='flex-[0.6]'>
                            <ReviewRating />
                        </div>
                    </div>

                    <div className='mt-6 flex sm:items-center sm:flex-row flex-col gap-8'>
                        <div className='flex-[0.4]'>
                            <p>Watch</p>
                            <div className='border p-4 rounded-md'>
                                <div className='bg-green-100 text-green-500 px-2 text-xs rounded-sm py-[2px] w-fit '>Total Stock : 10</div>
                                <div className='mt-2 text-[15px] text-grayText flex flex-col gap-1'>
                                    <p>Price :  699.98$ / Kg</p>
                                    <p>Tax : 0.00$</p>
                                    <p>Discount : 70.00$</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex-[0.6]'>
                            <h6 className='text-lg font-semibold mb-2'>Short Description :</h6>
                            <p>Nice</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* REVIEWS TABLE */}
            <div>
                <ReviewsTable />
            </div>
            
        </div>
    )
}

export default ProductDetails