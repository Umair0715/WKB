import './styles.css';
import ReactPaginate from 'react-paginate';
import ArrowLeftSvg from 'assets/svgs/ArrowLeft';
import ArrowRightSvg from 'assets/svgs/ArrowRight';

const Pagination = ({ pageCount , func }) => {

    const handlePageClick = ({ selected }) => {
        console.log(selected)
        // func(selected);
    }

    return (
        <div className='max-w-full flex justify-end py-4 relative bg-[#F5F5F5] px-2'>
            <ReactPaginate
            breakLabel="..."
            nextLabel={<ArrowRightSvg />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel={<ArrowLeftSvg />}
            renderOnZeroPageCount={null}
            className='flex items-center gap-4 pagination'
            />
        </div>
    )
}

export default Pagination