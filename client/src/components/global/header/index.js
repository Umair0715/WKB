import './styles.css';
import { useDrawerContext } from 'context/DrawerContext';
import useToggle from 'hooks/useToggle';
import { useRef } from 'react';
import useClickOutside from 'utils/clickOutside';
import { useNavigate } from 'react-router-dom';
import Hamburger from 'assets/svgs/hamburger.svg';


const Header = () => {
    const { showDrawer , setShowDrawer } = useDrawerContext();
    const navigate = useNavigate();
    
    const menuRef = useRef(null);
    const [showMenu , toggleMenu] = useToggle(false);

    useClickOutside(menuRef , () => toggleMenu(false));

    return (
       <div className='w-full py-3 border-b flex items-center md:justify-end justify-between gap-8 md:px-12 sm:px-8 px-2  text-lg'>
            <div className='cursor-pointer w-fit md:hidden block'
            onClick={() => setShowDrawer(true)}
            >
                <img src={Hamburger} alt="Hamburger" className='sm:w-[40px] w-[30px]' />
            </div>
            <div className='flex items-center sm:gap-8 gap-5'>
                <div className='relative'>
                    <div className='bg-darkSlate rounded-full w-[40px] h-[40px] flex items-center justify-center text-grayText text-xl cursor-pointer '
                    onClick={() => toggleMenu()}
                    >
                        <i className="uil uil-user -translate-y-0.5"></i>
                    </div>
                    {
                        showMenu && 
                        <div 
                        className='absolute right-[30%] top-[110%] w-[240px] h-auto bg-pure shadow-lg rounded-lg border '
                        ref={menuRef}
                        >
                            <div className='text-sm'>
                                <div className='flex items-center gap-2 py-3 px-3 border-b'>
                                    <div className='bg-darkSlate rounded-full w-[35px] h-[35px] flex items-center justify-center text-grayText text-xl cursor-pointer'>
                                        <i className="uil uil-user -translate-y-0.5"></i>
                                    </div>
                                    <div className='text-sm'>
                                        <p className='font-semibold'>Admin</p>
                                        <p className='text-grayText'>Admin@gmail.com</p>
                                    </div>
                                </div>
                                <div className='py-3 px-3 border-b cursor-pointer text-dark hover:bg-gray-100'>
                                    Settings
                                </div>
                                <div className='py-3 px-3 border-b cursor-pointer text-dark hover:bg-gray-100'
                                onClick={() => navigate('/login')}
                                >
                                    Sign Out
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
       </div>
    )
}

export default Header;