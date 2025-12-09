import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componetns/common/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Footer from "./componetns/common/Footer";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="sticky top-0 z-10">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Products />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
