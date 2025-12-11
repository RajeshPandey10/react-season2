import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";

import Products from "./pages/Products";
import Lyout from "./layouts/Lyout";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Lyout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="product" element={<Products />} />
            
          </Route>
          
          <Route path="*" element={<NoPage/>}/>
        </Routes>
       
      </BrowserRouter>
    </>
  );
}

export default App;
