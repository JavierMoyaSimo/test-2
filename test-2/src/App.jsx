import "./App.css";

//New imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./containers/Home/Home";
import Detail from "./containers/Detail/Detail";

function App() {
  <div className="App">
    <BrowserRouter>
      {/* Aqui va la parte fija */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
