import {React,useRef} from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shorts from "./pages/Shorts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Header from "./components/Header/Header";


const App = () => {
  const searchRef = useRef(null); 
  return (
    <div className=" w-screen h-screen overflow-x-hidden"> 
    
      <BrowserRouter>
      <Header searchRef={searchRef}/> 
        <Navbar searchRef={searchRef} />
        <Routes>
          <Route path="/Shorts" element={<Shorts />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
