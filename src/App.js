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

          {/* 404 Page */}
          <Route path="*" element={<Page404 />} />

          {/* Admin Pages */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
