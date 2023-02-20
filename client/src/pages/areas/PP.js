import AddNewPopup from 'components/areas/PP/AddNewPopup';
import PP_list from 'components/areas/PP/PP_list';
import useToggle from 'hooks/useToggle';
import React from 'react'

const PP = () => {
    const [showAddPpPopup , toggleAddPpPopup] = useToggle(false);

    return (
        <div className='sm:p-6 py-4 px-2 min-h-screen h-full'>
            <div className='flex items-center justify-between gap-6'>
                <h1 className='font-semibold sm:text-2xl text-xl'>PP's</h1>
                <div className='btn-primary p-sm'>
                    <div>
                        <i className="uil uil-plus-circle"></i>
                    </div>
                    <h1 onClick={() => toggleAddPpPopup(true)}>Add New PP</h1>
                </div>
            </div>
            <div >
                <PP_list 
                toggleAddPpPopup={toggleAddPpPopup}
                showAddPpPopup={showAddPpPopup}
                />
            </div>
            {
                showAddPpPopup && 
                <div>
                    <AddNewPopup 
                    toggleAddPpPopup={toggleAddPpPopup}
                    />
                </div>
            }
        </div>
    )
}

export default PP;