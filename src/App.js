import React, { useRef, useState } from "react";
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
import ChannelCard from "./components/ChannelCard";
import ChannelDetail from "./pages/ChannelDetail";

export const ThemeContext = React.createContext();
export const SearchContext = React.createContext();

const App = () => {
  const searchRef = useRef(null);
  const themeRef = useRef(null);
  const [focused, setFocused] = useState(false);
  // const [brightness, setBrightness] = useState(100);
  const [theme, settheme] = useState(null);
  const handleToggleTheme = () => {
    settheme(theme === "dark" ? null : "dark");
  };

  return (
    <ThemeContext.Provider value={{ handleToggleTheme, theme }}>
      <SearchContext.Provider value={{ searchRef, setFocused, focused }}>
        <div
          ref={themeRef}
          className={`w-screen font-[Arial] overflow-x-hidden relative transform-none max-w-full bg-gray-900 scroll-smooth transition-colors duration-[500ms] ease-in-out ${theme}`}
          // style={{ filter: `brightness(${brightness}%)` }}
        >
          <BrowserRouter>
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

            {/* <Header /> */}
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/" element={<ChannelCard />} /> */}
              {/* <Route path="/" element={<ErrorPage />} /> */}
              <Route path="/Shorts" element={<Shorts />} />
              {/* <Route path="/Home" element={<Home />} /> */}
              <Route path="*" element={<NotFound />} />
              <Route path="/results" element={<Search />} />
              <Route path="/video" element={<Video />} />
              <Route
                path="/ChannelDetails/:channelId"
                element={<ChannelDetail />}
              />
            </Routes>
          </BrowserRouter>
        </div>
      </SearchContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
