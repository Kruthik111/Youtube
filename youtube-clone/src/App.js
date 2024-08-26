import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shorts from "./pages/Shorts";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import NotFound from "./pages/NotFound";

const Team = () => <h2>Team Page</h2>;
const Company = () => <h2>Company Page</h2>;

const App = () => {
  return (
    <div className=" w-screen h-screen overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Team" element={<Team />} />
          <Route path="/Shorts" element={<Shorts />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
