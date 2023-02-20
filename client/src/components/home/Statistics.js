import React from 'react'
import EarningChart from './EarningChart'
import TopCustomers from './TopCustomers'
import TopSellings from './TopSellings'

const Statistics = () => {
    return (
        <>
            <div  className='sm:px-6 px-3 py-4 rounded-lg border shadow-md'>
                <div className='flex sm:items-center justify-between sm:flex-row flex-col sm:gap-0 gap-4'>
                    <div className='flex items-center gap-2'>
                        <i className="uil uil-chart-bar text-xl"></i>
                        <h3 className='sm:text-xl text-lg font-semibold '>Dashboard statistics</h3>
                    </div>
                    <div>
                        <select className='border py-1.5 px-4 outline-none rounded-md border-cyan-400 sm:text-base text-sm'>
                            <option value="">Overall Statistics</option>
                            <option value="">Today Statistics</option>
                            <option value="">This Month Statistics</option>
                        </select>
                    </div>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-6 pb-2'>
                    <div className='bg-[#3E215D] py-4 px-5 rounded-lg text-pure '>
                        <div className='text-sm font-semibold'>
                            <h6>PENDING</h6>
                        </div>
                        <div className='flex items-center justify-between mt-3 font-bold text-2xl'>
                            <p>17</p>
                            <div className='text-4xl'>
                                <i className="uil uil-shopping-cart"></i>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#001E6C] py-4 px-5 rounded-lg text-pure '>
                        <div className='text-sm font-semibold'>
                            <h6>CONFIRMED</h6>
                        </div>
                        <div className='flex items-center justify-between mt-3 font-bold text-2xl'>
                            <p>4</p>
                            <div className='text-4xl'>
                                <i className="uil uil-check-circle"></i>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#053742] py-4 px-5 rounded-lg text-pure '>
                        <div className='text-sm font-semibold'>
                            <h6>PROCESSING</h6>
                        </div>
                        <div className='flex items-center justify-between mt-3 font-bold text-2xl'>
                            <p>17</p>
                            <div className='text-4xl'>
                                <i className="uil uil-clock"></i>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#343A40] py-4 px-5 rounded-lg text-pure '>
                        <div className='text-sm font-semibold'>
                            <h6>OUT FOR DELIVERY</h6>
                        </div>
                        <div className='flex items-center justify-between mt-3 font-bold text-2xl'>
                            <p>2</p>
                            <div className='text-4xl'>
                                <i className="uil uil-truck"></i>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            {/* CHART */}
            <div className='my-8 px-6 py-4 rounded-lg border shadow-lg'>
                <div className='flex items-center justify-between border-b pb-3 text-[15px] text-dark'>
                    <div className='flex items-center gap-2 font-semibold '>
                        <i className="uil uil-chart-pie-alt text-xl"></i>
                        <p>Earning statistics for business analytics</p>
                    </div>
                    <div className='items-center gap-2 font-semibold sm:flex hidden '>
                        <p>This Year Earning</p>
                        <i className="uil uil-chart text-xl"></i>
                    </div>
                </div>
                <div className='border-b py-6'>
                    <div className='border border-grayText rounded-md py-2 px-8  text-sm w-[250px] flex items-center justify-center gap-2'>
                        <div className='w-[6px] h-[6px] rounded-full bg-green-500'></div>
                        <p>Earnings : 0.00$</p>
                    </div>
                </div>
                <div className='mt-6'>
                    <EarningChart />
                </div>
            </div>
            {/* TOP SELLINGS */}
            <div className='my-8 rounded-lg border shadow-lg'>
                <div>
                    <TopSellings />
                </div>
            </div>
            {/* TOP CUSTOMERS */}
            <div className='my-8 rounded-lg border shadow-lg'>
                <div>
                    <TopCustomers />
                </div>
            </div>
        </>
    )
}

export default Statistics