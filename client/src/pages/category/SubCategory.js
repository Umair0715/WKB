import SubCategoryTable from 'components/categories/SubCategoryTable';
import useToggle from 'hooks/useToggle';
import React from 'react'

const SubCategory = () => {
    const [showAddSubCatPopup , toggleAddSubCatPopup] = useToggle(false);

    return (
        <div className='sm:p-6 py-4 px-2 min-h-screen h-full'>
            <div className='flex items-center justify-between gap-6'>
                <h1 className='font-semibold sm:text-2xl text-xl'>Sub Categories</h1>
                <div className='btn-primary p-sm'>
                    <div>
                        <i className="uil uil-plus-circle"></i>
                    </div>
                    <h1 onClick={() => toggleAddSubCatPopup(true)}>Add Sub Category</h1>
                </div>
            </div>
            <div >
                <SubCategoryTable 
                toggleAddSubCatPopup={toggleAddSubCatPopup}
                showAddSubCatPopup={showAddSubCatPopup}
                />
            </div>
        </div>
    )
}

export default SubCategory;