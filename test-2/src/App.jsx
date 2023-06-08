import "./App.css";

//New imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./containers/Home/Home.jsx";
import Detail from "./containers/Detail/Detail.jsx";


function App() {

  //Normal mode- dark mode
  const [darkMode, setDarkMode] = useState(false);

  //Handle-button
  const handleDarkMode = () => {
    setDarkMode(!darkMode);

  };

  return(
     <div className={
      darkMode ? "dark-mode  App" : "light-mode  App"
    }>
    <BrowserRouter>
    <div
      className={
        darkMode ? "dark-mode button" : "light-mode button"
      }
      onClick={handleDarkMode}
    >
      {darkMode ? "To Day!" : "To Night!"}
    </div>

      <Routes>
        <Route  path="/" element={<Home lightNight={darkMode} />} />
        <Route path="/detail" element={<Detail lightNight={darkMode} />} />
      </Routes> 
    </BrowserRouter>
  </div>
  )
 
}

export default App;
