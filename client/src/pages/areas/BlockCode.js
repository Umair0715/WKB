import AddNewPopup from 'components/areas/PP/AddNewPopup';
import BlockCodeList from 'components/areas/blockCode/blockCodeList';
import useToggle from 'hooks/useToggle';
import React from 'react'

const BlockCode = () => {
    const [showBlockCodePopup , toggleBlockCodePopup] = useToggle(false);

    return (
        <div className='sm:p-6 py-4 px-2 min-h-screen h-full'>
            <div className='flex items-center justify-between gap-6'>
                <h1 className='font-semibold sm:text-2xl text-xl'>Block Codes</h1>
                <div className='btn-primary p-sm'>
                    <div>
                        <i className="uil uil-plus-circle"></i>
                    </div>
                    <h1 onClick={() => toggleBlockCodePopup(true)}>Add New Code</h1>
                </div>
            </div>
            <div >
                <BlockCodeList 
                toggleBlockCodePopup={toggleBlockCodePopup}
                showBlockCodePopup={showBlockCodePopup}
                />
            </div>
            {
                showBlockCodePopup && 
                <div>
                    <AddNewPopup 
                    toggleBlockCodePopup={toggleBlockCodePopup}
                    />
                </div>
            }
        </div>
    )
}

export default BlockCode;