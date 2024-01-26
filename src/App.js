import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Page404 from './Pages/404/Page404';
import AppNavbar from './components/AppNavbar';
import Signup from './Pages/Signup/Signup';
import Contact from './Pages/Contact/Contact';
import { Toaster } from 'react-hot-toast';
import AuthContextProvider from './context/authContext';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './Pages/AdminPages/Dashboard';
import AdminNavbar from './components/AdminComponents/AdminNavbar';
import SingleProduct from './Pages/Product/SingleProduct';
import AllProducts from './Pages/Product/AllProducts';
import Cartpage from './Pages/Cartpage/Cartpage';
import Wishlist from './Pages/Wishlist/Wishlist';
import ProtectedAdminRoute from './components/AdminComponents/ProtectedAdminRoute';
import Category from './Pages/AdminPages/Category/Category';
import Product from './Pages/AdminPages/Product/Product';
import User from './Pages/AdminPages/User/User';

function App() {



  return (
    <div>
      <AuthContextProvider>
        <Toaster />
        <AppNavbar />
        <AdminNavbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />

          {/* <Route path="/cartpage" element={<Cartpage />} /> */}

          <Route
            path="/cartpage"
            element={
              <ProtectedRoute>
                <Cartpage />
              </ProtectedRoute>
            }
          />


          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/product" element={<AllProducts />} />
          <Route path="/product/:id" element={<SingleProduct />} />

          {/* 404 Page */}
          <Route path="*" element={<Page404 />} />

          {/* Admin Pages */}
          <Route
            path="/dashboard"
            element={
              <ProtectedAdminRoute>
                <Dashboard />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/dashboard/products"
            element={
              <ProtectedAdminRoute>
                <Product />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/dashboard/category"
            element={
              <ProtectedAdminRoute>
                <Category />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/dashboard/users"
            element={
              <ProtectedAdminRoute>
                <User />
              </ProtectedAdminRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
