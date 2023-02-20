import BlockInchargesList from 'components/blockIncharge/BlockInchargesList';
import Heading from 'components/global/Heading';
import React from 'react'

const CustomersList = () => {
    return (
        <div className='sm:p-6 py-4 px-2'>
            <div className='flex items-center gap-2'>
                <Heading title='Block Incharges' icon={false} />
                <div className="total-count translate-y-1">
                    34
                </div>
            </div>
            <div className='mt-6 shadow-bg'>
                <BlockInchargesList />
            </div>
        </div>
    )
}

export default CustomersList;