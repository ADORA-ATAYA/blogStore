import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Header from "./Header"
import Footer from "./footer/Footer"
import Blogs from './components/Blogs';
import Registrationpage from './components/Registrationpage';
import BlogPage from './components/BlogPage';
import Premium from './components/Premium';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Registrationpage/>} />
      <Route path="/readmore" element={<BlogPage/>} />
      <Route path="/premium" element={<Premium />} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
