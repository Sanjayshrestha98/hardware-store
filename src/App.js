import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Page404 from './Pages/404/Page404';
import AppNavbar from './components/AppNavbar';
import Signup from './Pages/Signup/Signup';
import Contact from './Pages/Contact/Contact';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div>
      <Toaster />
      <AppNavbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />

        {/* 404 Page */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
