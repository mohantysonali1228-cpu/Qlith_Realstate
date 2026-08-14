import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Properties from "../pages/Properties";
import Agents from "../pages/Agents";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";




function AllRoutes() {
  return (
     <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/agents" element={<Agents />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer/>
   


    
     </>
    
  );

}

export default AllRoutes;