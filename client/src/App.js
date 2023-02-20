import Footer from "components/global/footer";
import Header from "components/global/header";
import Sidebar from "components/global/sidebar";
import Login from "pages/auth/Login";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Home from "./pages/home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Category from "pages/category";
import SubCategory from "pages/category/SubCategory";
import Products from "pages/products";
import AddNewProduct from "pages/products/AddNewProduct";
import ProductDetails from "pages/products/ProductDetails";
import ServeyHistory from "pages/ServeyHistory";
import Orders from "pages/orders";
import CustomersList from "pages/customersList";
import EarningReport from "pages/reports/EarningReport";
import { useState } from "react";
import ProductReport from "pages/reports/ProductReport";
import SupplierReport from "pages/reports/SupplierReport";
import NA from "pages/areas/NA";
import PP from "pages/areas/PP";
import UC from "pages/areas/UC";
import BlockCode from "pages/areas/BlockCode";

function App() {
    const [isLoginPage , setIsLoginPage] = useState(false);

    return (
        <div className="space">
            <ToastContainer 
                style={{fontSize: 15}}
                position="top-center"
                autoClose={3000}
                hideProgressBar
                closeOnClick
                pauseOnHover
            />
            <Router>
                <Header />
                { !isLoginPage && <Sidebar /> }
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route 
                    path='/login' 
                    element={<Login setIsLoginPage={setIsLoginPage} />} 
                    />
                    {/* WKB ROUTES */}
                    <Route 
                    path='/area/NA' 
                    element={<NA />} 
                    />
                    <Route 
                    path='/area/PP' 
                    element={<PP />} 
                    />
                    <Route 
                    path='/area/UC' 
                    element={<UC />} 
                    />
                    <Route 
                    path='/area/block-code' 
                    element={<BlockCode />} 
                    />

                    <Route 
                    path='/servey-history' 
                    element={<ServeyHistory />} 
                    />
                    {/* WKB ROUTES */}
                    <Route 
                    path='/categories/main' 
                    element={<Category />} 
                    />
                    <Route 
                    path='/categories/sub' 
                    element={<SubCategory />} 
                    />
                    <Route 
                    path='/products' 
                    element={<Products />} 
                    />
                    <Route 
                    path='/product/add-new' 
                    element={<AddNewProduct />} 
                    />
                    <Route 
                    path='/product/details/:id' 
                    element={<ProductDetails />} 
                    />
                    <Route path='/orders' element={<Orders />} />
                    <Route 
                    path='/customer-list' 
                    element={<CustomersList />} 
                    />
                    <Route 
                    path='/report/earning-report'
                    element={<EarningReport />}
                    />
                    <Route 
                    path='/report/product-report'
                    element={<ProductReport />}
                    />
                    <Route 
                    path='/report/supplier-report'
                    element={<SupplierReport />}
                    />
                </Routes>
                { !isLoginPage &&  <Footer />}
            </Router>
        </div>
    );
}

export default App;
