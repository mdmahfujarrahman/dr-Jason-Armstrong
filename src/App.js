import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Pages/About/About';
import Blog from './components/Pages/Blog/Blog';
import Footer from './components/Pages/Home/Footer/Footer';
import Home from './components/Pages/Home/Home/Home';
import Login from './components/Pages/Login/LogIn/LogIn';
import Header from './components/Pages/Sheard/Header/Header';
import NotFound from './components/Pages/Sheard/NotFound/NotFound';

function App() {
  return (
      <div className="">
          <Header />
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/blog" element={<Blog />}></Route>
              <Route path="/about-me" element={<About />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
      </div>
  );
}

export default App;
