import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componetns/Navbar";
import Footer from "./componetns/Footer";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Services from "./pages/Services";

const App = () => {
  return (
    // <HomePage/>
    <BrowserRouter>
      <div className="sticky top-0 mb-10">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
