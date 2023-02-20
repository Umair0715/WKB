import AddNewPopup from 'components/areas/NA/AddNewPopup';
import NA_list from 'components/areas/NA/NA_list';
import useToggle from 'hooks/useToggle';
import React from 'react'

const NA = () => {
    const [showAddNaPopup , toggleAddNaPopup] = useToggle(false);

    return (
        <div className='sm:p-6 py-4 px-2 min-h-screen h-full'>
            <div className='flex items-center justify-between gap-6'>
                <h1 className='font-semibold sm:text-2xl text-xl'>NA's</h1>
                <div className='btn-primary p-sm'>
                    <div>
                        <i className="uil uil-plus-circle"></i>
                    </div>
                    <h1 onClick={() => toggleAddNaPopup(true)}>Add New NA</h1>
                </div>
            </div>
            <div >
                <NA_list 
                toggleAddNaPopup={toggleAddNaPopup}
                showAddNaPopup={showAddNaPopup}
                />
            </div>
            {
                showAddNaPopup && 
                <div>
                    <AddNewPopup 
                    toggleAddNaPopup={toggleAddNaPopup}
                    />
                </div>
            }
        </div>
    )
}

export default NA;