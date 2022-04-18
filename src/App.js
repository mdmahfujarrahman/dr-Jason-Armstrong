import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Pages/About/About';
import Blogs from './components/Pages/Blogs/Blogs';
import Footer from './components/Pages/Home/Footer/Footer';
import Home from './components/Pages/Home/Home/Home';
import Login from './components/Pages/Login/LogIn/LogIn';
import RequireAuth from './components/Pages/Login/RequireAuth/RequireAuth';
import SignUp from './components/Pages/Login/SignUp/SignUp';
import Header from './components/Pages/Sheard/Header/Header';
import NotFound from './components/Pages/Sheard/NotFound/NotFound';
import MakeAnAppointment from './components/Pages/MakeAnAppointment/MakeAnAppointment';
import { ToastContainer } from "react-toastify";

function App() {
  return (
      <div className="">
          <Header />
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/blogs" element={<Blogs />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route
                  path="/make-an-appointment"
                  element={
                      <RequireAuth>
                          <MakeAnAppointment />
                      </RequireAuth>
                  }
              ></Route>
              <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <ToastContainer />
          <Footer />
      </div>
  );
}

export default App;
