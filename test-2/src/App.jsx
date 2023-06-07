import "./App.css";

//New imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./containers/Home/Home";
import Detail from "./containers/Detail/Detail";

function App() {
  return(
     <div className="App">
    <BrowserRouter>
      

      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  </div>
  )
 
}

export default App;
