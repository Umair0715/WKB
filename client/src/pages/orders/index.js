import Search from "components/global/Search";
import OrdersTable from "components/orders/OrdersTable";


const filterOptions = [
    { value : "all" , label : 'All'} ,
    { value : "pending" , label : 'Pending'} ,
    { value : "confirmed" , label : 'Confirmed'} ,
    { value : "processing" , label : 'Processing'} ,
    { value : "delivered" , label : 'Delivered'} ,
    { value : "returned" , label : 'Returned'} ,
    { value : "failed" , label : 'Failed'} ,
    { value : "canceled" , label : 'Canceled'} ,
]

const Orders = () => {
    return (
        <div className='sm:p-6 py-4 px-2'>
            <div className="flex items-center justify-between pr-4">
                <div className='flex items-center gap-4'>
                    <h1 className='main-heading'>
                        <span>Orders</span>
                    </h1>
                    <div className='total-count'>
                        22
                    </div>
                </div>
                <div>
                    <select 
                    className="border border-cyan-500 outline-none py-1.5 sm:px-2 rounded-sm sm:w-[200px] w-fit"
                    >
                        {
                            filterOptions?.map(op => (
                                <option value={op?.value}>{op?.label}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <div className="shadow-bg mt-8">
                <div className="p-4 flex justify-end">
                    <Search />
                </div>
                <div>
                    <OrdersTable />
                </div>
            </div>
        </div>
    )
}

export default Orders;