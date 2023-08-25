import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Header from "./Header"
import Footer from "./footer/Footer"
import Blogs from './components/Blogs';
import Loginpage from './components/Loginpage';
import Registrationpage from './components/Registrationpage';
import BlogPage from './components/BlogPage';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<Loginpage/>} />
      <Route path="/register" element={<Registrationpage/>} />
      <Route path="/readmore" element={<BlogPage/>} />
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
