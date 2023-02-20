import UserReportSvg from 'assets/svgs/userReport.svg';
import DatePicker_ from 'components/global/Datepicker';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Pdf from 'assets/svgs/pdf.svg';
import SelectBox from 'components/global/SelectBox';
import SupplierReportTable from 'components/reports/SupplierReportTable';


const SupplierReport = () => {
    const [startDate , setStartDate] = useState(new Date());
    const [endDate , setEndDate] = useState(new Date());

    return (
        <div className='sm:p-6 py-4 px-2'>
        <div className='flex items-center justify-between gap-8'>
            <div className='flex items-center gap-4'>
                <div>
                    <img 
                    src={UserReportSvg} 
                    alt="Product Report" 
                    className='sm:w-[60px] w-[40px]'
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <h1 className='sm:text-2xl text-lg font-semibold'>
                        Supplier Report Overview
                    </h1>
                    
                </div>
            </div>
            <div className='bg-primary text-white rounded-full px-2 py-1 cursor-pointer text-xl mr-2'>
                <Link to='/'>
                    <i className="uil uil-estate"></i>
                </Link>
            </div>
        </div>
        <div className='mt-6 border rounded-md shadow-sm sm:px-4 px-2 pt-2 pb-4'>
            <p className='text-grayText'>Show Data by Date Range</p>
            <div className='mt-6'>
                <form  className='flex md:flex-row flex-col gap-6'>
                    <div className='flex-1 flex-col gap-1.5'>
                        <label>Product</label>
                        <SelectBox 
                        options={[
                            { label : 'Supplier1' , value : "p1" } , 
                            { label : 'Supplier2' , value : "p2" } , 
                            { label : 'Supplier3' , value : "p3" } , 
                        ]}
                        />
                    </div>
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
            <div className='mt-6 text-gray-500 text-sm'>
                <div className='flex items-center gap-1 font-semibold'>
                    <p>Total Delivered Qty :</p>
                    <span>10</span>
                </div>
            </div>
        </div>
        <div className='shadow-bg mt-6'>
            <div className='flex items-center justify-between gap-2 sm:py-6 sm:px-5 py-4 px-2'>
                <div className='text-lg font-semibold'>Report</div>
                <div className='cursor-pointer' title='Export to pdf'>
                    <img src={Pdf} alt="Pdf" className='w-[40px]' />
                </div>
            </div>
            <SupplierReportTable />
        </div>
    </div>
    )
}

export default SupplierReport