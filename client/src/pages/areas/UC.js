import AddNewPopup from 'components/areas/PP/AddNewPopup';
import UC_list from 'components/areas/UC/UC_list';
import useToggle from 'hooks/useToggle';
import React from 'react'

const UC = () => {
    const [showAddUcPopup , toggleAddUcPopup] = useToggle(false);

    return (
        <div className='sm:p-6 py-4 px-2 min-h-screen h-full'>
            <div className='flex items-center justify-between gap-6'>
                <h1 className='font-semibold sm:text-2xl text-xl'>UC's</h1>
                <div className='btn-primary p-sm'>
                    <div>
                        <i className="uil uil-plus-circle"></i>
                    </div>
                    <h1 onClick={() => toggleAddUcPopup(true)}>Add New UC</h1>
                </div>
            </div>
            <div >
                <UC_list 
                toggleAddUcPopup={toggleAddUcPopup}
                showAddUcPopup={showAddUcPopup}
                />
            </div>
            {
                showAddUcPopup && 
                <div>
                    <AddNewPopup 
                    toggleAddUcPopup={toggleAddUcPopup}
                    />
                </div>
            }
        </div>
    )
}

export default UC;