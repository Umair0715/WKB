import EarningReportSvg from 'assets/svgs/earningReport.svg';
import DatePicker_ from 'components/global/Datepicker';
import OrdersTable from 'components/orders/OrdersTable';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Pdf from 'assets/svgs/pdf.svg';

const EarningReport = () => {
    const [startDate , setStartDate] = useState(new Date());
    const [endDate , setEndDate] = useState(new Date());

    return (
        <div className='sm:p-6 py-4 px-2'>
            <div className='flex items-center justify-between gap-8'>
                <div className='flex items-center gap-2'>
                    <div>
                        <img 
                        src={EarningReportSvg} 
                        alt="Earning Report icon" 
                        className='sm:w-[60px] w-[50px] '
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='sm:text-2xl text-lg font-semibold'>
                            Earning Report Overview
                        </h1>
                        {/* <div className='flex items-center text-[15px] text-grayText'>
                            <p>
                                <span>Admin:</span> Admin Panel 
                            </p>
                            <p>  Date ( 2023-01-29 00:00:00 - 2023-02-02 23:59:59 )</p>
                        </div> */}
                    </div>
                </div>
                <div className='bg-primary text-white rounded-full px-2 py-1 cursor-pointer text-xl mr-2'>
                    <Link to='/'>
                        <i className="uil uil-estate"></i>
                    </Link>
                </div>
            </div>
            <div className='mt-6 shadow-bg px-4 pt-2 pb-4'>
                <p className='text-grayText'>Show Data by Date Range</p>
                <div className='mt-6'>
                    <form  className='flex sm:flex-row flex-col gap-6'>
                        <div className='flex-1 flex flex-col gap-1.5'>
                            <label className='text-gray-500'>From</label>
                            <DatePicker_ 
                            value={startDate} 
                            setValue={setStartDate} 
                            />
                        </div>
                        <div className='flex-1 flex flex-col gap-1.5'>
                            <label className='text-gray-500'>To</label>
                            <DatePicker_ 
                            value={endDate} 
                            setValue={setEndDate} 
                            />
                        </div>
                        <div className='flex-[0.5]  mt-7'>
                            <button 
                            className="bg-primary py-3 rounded-md text-pure cursor-pointer hover:bg-primaryHover w-full font-semibold"
                            type='submit'
                            >
                                SHOW
                            </button>
                        </div>
                    </form>
                </div>
                <div className='mt-6'>
                    <div className='flex sm:flex-row flex-col gap-4'>
                        <div className='border rounded-md p-4  flex items-center justify-between w-[300px]'>
                            <div className='flex items-center gap-2 font-semibold text-xl'>
                                <i className="uil uil-usd-circle"></i>
                                <h5>Total Sold</h5>
                            </div>
                            <div className='flex items-center gap-2 text-green-500'>
                                <i className="uil uil-arrow-growth"></i>
                                <p>0.00$</p>
                            </div>
                        </div>
                        <div className='border rounded-md p-4  flex items-center justify-between w-[300px]'>
                            <div className='flex items-center gap-2 font-semibold text-xl'>
                                <i className="uil uil-money-bill"></i>
                                <h5>Total Tax</h5>
                            </div>
                            <div className='flex items-center gap-2 text-red-500'>
                                <i className="uil uil-chart-down"></i>
                                <p>0.00$</p>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className='mt-8 border rounded-md'>
                <div className='flex items-center justify-between gap-2 sm:py-6 sm:px-5 py-4 px-2'>
                    <div className='text-lg font-semibold'>Report</div>
                   
                    <div className='cursor-pointer' title='Export to pdf'>
                        <img src={Pdf} alt="Pdf" className='w-[40px]' />
                    </div>
                </div>
                <OrdersTable />
            </div>
        </div>
    )
}

export default EarningReport;