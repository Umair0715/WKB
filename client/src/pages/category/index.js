import MainCategoryTable from 'components/categories/MainCategoryTable';
import useToggle from 'hooks/useToggle';
import React from 'react'

const Category = () => {
    const [showAddCatPopup , toggleAddCatPopup] = useToggle(false);

    return (
        <div className='sm:p-6 py-4 px-2 min-h-screen h-full'>
            <div className='flex sm:items-center sm:flex-row flex-col-reverse justify-between gap-6'>
                <h1 className='font-semibold sm:text-2xl text-xl'>Main Categories</h1>
                <div className='btn-primary p-sm w-fit'>
                    <div>
                        <i className="uil uil-plus-circle"></i>
                    </div>
                    <h1 onClick={() => toggleAddCatPopup(true)}>Add New Category</h1>
                </div>
            </div>
            <div >
                <MainCategoryTable 
                toggleAddCatPopup={toggleAddCatPopup}
                showAddCatPopup={showAddCatPopup}
                />
            </div>
        </div>
    )
}

export default Category;