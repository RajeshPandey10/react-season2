import Home from "../componetns/Home";
import Navbar from "../componetns/Navbar";

const HomePage = () => {
  return (
    <>
      <div className="sticky top-0">
        <Navbar />
      </div>
      <Home />
    </>
  );
};

export default HomePage;
