import './styles.css';
import { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDrawerContext } from 'context/DrawerContext';
import useClickOutside from 'utils/clickOutside';


const Sidebar = () => {
    const sidebarRef = useRef();
    const location = useLocation();
    const [showCatDrop , setShowCatDrop] = useState(false);
    const [showReportDropMenu , setShowReportDropMenu] = useState(false);
    const { showDrawer , setShowDrawer } = useDrawerContext();

    useClickOutside(sidebarRef , () => setShowDrawer(false))

    const isActive = (path , home) => {
        if(home) return location.pathname === '/' ;
        return location.pathname.split('/').includes(path);
    }

   

    return (
        <div>
            {
                showDrawer && 
                <div className='fixed top-0 left-0 bg-gray-900 w-full h-screen bg-opacity-30 opacity-1 duration-300 z-10'>
                </div>
            }
            <div 
            className={`sidebar ${showDrawer ? 'show' : '' } fixed top-0 md:left-0 -left-[200%] w-[250px] min-h-screen h-full overflow-auto py-4 px-6 z-50 border-r bg-pure`} 
            ref={sidebarRef}
            >
                <div className='overflow-auto pb-8'>
                    <Link to='/' className='text-3xl font-bold text-primary'>
                        TEAM WKB
                    </Link>
                    <ul className='sideMenu-list mt-6 text-dark min-h-screen h-full'>
                        <li>
                            <Link 
                            to='/' 
                            className={`${isActive('' , true) ? 'active' : ''} sideMenu-item`}
                            >   
                                <i className="uil uil-home"></i>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        {/* Area Section */}
                        <li>
                            <p className='sideMenu-heading'>Area SECTION</p>
                            <div 
                            className={`${isActive('area') ? 'active' : ''} sideMenu-item`}
                            onClick={() => setShowCatDrop(prev => !prev)}
                            >
                                <i className="uil uil-sitemap"></i>
                                <span>Areas</span>
                                <div className='sideMenu-item-angle'>
                                    <i className="uil uil-angle-down"></i>
                                </div>
                            </div>
                            {/* DROP MENU */}
                            {
                                showCatDrop && 
                                <ul className="sideMenu-dropList">
                                    <li>
                                        <Link 
                                        to='/area/NA' 
                                        className={`${isActive('NA') ? 'active' : ''} sideMenu-item`}
                                        >
                                            <div className='sideMenu-dropCircle'></div>
                                            <span>NA</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                        to='/area/PP' 
                                        className={`${isActive('PP') ? 'active' : ''} sideMenu-item`}
                                        >
                                            <div className='sideMenu-dropCircle'></div>
                                            <span>PP</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                        to='/area/UC' 
                                        className={`${isActive('UC') ? 'active' : ''} sideMenu-item`}
                                        >
                                            <div className='sideMenu-dropCircle'></div>
                                            <span>UC</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                        to='/area/block-code' 
                                        className={`${isActive('block-code') ? 'active' : ''} sideMenu-item`}
                                        >
                                            <div className='sideMenu-dropCircle'></div>
                                            <span>Block Codes</span>
                                        </Link>
                                    </li>
                                </ul>
                            }
                        </li>
                        {/* Servey Section */}
                        <li>
                            <p className='sideMenu-heading'>SERVEY SECTION</p>
                           
                            <Link 
                            to='/servey-history' 
                            className={`${isActive('servey-history') ? 'active' : ''} sideMenu-item`}
                            >
                                <i className="uil uil-star"></i>
                                <span>Servey's History</span>
                                
                            </Link>
                        </li>
                        
                        <li>
                            <Link 
                            to='/settings' 
                            className={`${isActive('settings') ? 'active' : ''} sideMenu-item`}
                            >
                                <i className="uil uil-setting"></i>
                                <span>Settings</span>
                                
                            </Link>
                        </li>
                        {/* Customer Section */}
                        <li>
                            <p className='sideMenu-heading'>User SECTION</p>
                            <Link 
                            to='/customer-list' 
                            className={`${isActive('customer-list') ? 'active' : ''} sideMenu-item`}
                            >
                                <i className="uil uil-user"></i>
                                <span>Block Incharges</span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                            to='/subscribed-emails' 
                            className={`${isActive('subscribed-emails') ? 'active' : ''} sideMenu-item`}
                            >
                                <i className="uil uil-envelope"></i>
                                <span>Team Members</span>
                            </Link>
                        </li>
                         {/* Report Section */}
                         <li>
                            <p className='sideMenu-heading'>REPORT</p>
                            <div 
                            className={`${isActive('report') ? 'active' : ''} sideMenu-item`}
                            onClick={() => setShowReportDropMenu(prev => !prev)}
                            >
                                <i className="uil uil-ban"></i>
                                <span>Report</span>
                                <div className='sideMenu-item-angle'>
                                    <i className="uil uil-angle-down"></i>
                                </div>
                            </div>
                            {/* DROP MENU */}
                            {
                                showReportDropMenu && 
                                <ul className="sideMenu-dropList">
                                    <li>
                                        <Link 
                                        to='/report/earning-report' 
                                        className={`${isActive('earning-report') ? 'active' : ''} sideMenu-item`}
                                        >
                                            <div className='sideMenu-dropCircle'></div>
                                            <span>Earning Report</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                        to='/report/product-report' 
                                        className={`${isActive('product-report') ? 'active' : ''} sideMenu-item`}
                                        >
                                            <div className='sideMenu-dropCircle'></div>
                                            <span>Product Report</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                        to='/report/supplier-report' 
                                        className={`${isActive('supplier-report') ? 'active' : ''} sideMenu-item`}
                                        >
                                            <div className='sideMenu-dropCircle'></div>
                                            <span>Supplier Report</span>
                                        </Link>
                                    </li>
                                </ul>
                            }
                        </li>
                    </ul>
                </div>
                

            </div>
        </div>
    )
}

export default Sidebar