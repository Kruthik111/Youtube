import { React, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shorts from "./pages/Shorts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Search from "./pages/Search";
import Video from "./pages/Video";
import useLocalStroage from "./utils/useLocalStorage";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  const searchRef = useRef(null);
  const [focused, setFocused] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [brightness, setBrightness] = useState(100);
  const [theme, settheme] = useState(null);
  const handleToggleTheme = () => {
    settheme(theme === "dark" ? null : "dark");
  };

  return (
    <div
      className={`w-screen font-mono overflow-x-hidden relative transform-none max-w-full bg-gray-900 scroll-smooth ease-in-out ${theme}`}
      // style={{ filter: `brightness(${brightness}%)` }}
    >
      {/* <input
        type="range"
        name=""
        min="30"
        step={10}
        max="100"
        value={brightness}
        onChange={(e) => {
          setBrightness(e.target.value);
        }}
      /> */}
      <BrowserRouter>
        <Header
          searchRef={searchRef}
          setFocused={setFocused}
          focused={focused}
          setSearchResult={setSearchResult}
          toggleTheme={handleToggleTheme}
        />
        <Navbar searchRef={searchRef} setFocused={setFocused} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<ErrorPage />} />
          <Route path="/Shorts" element={<Shorts />} />
          {/* <Route path="/Home" element={<Home />} /> */}
          <Route path="*" element={<NotFound />} />
          <Route path="/results" element={<Search />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
