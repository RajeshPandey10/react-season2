import { Outlet } from "react-router-dom";
import Header from "../componetns/common/Header";
import Footer from "../componetns/common/Footer";

const Lyout = () => {
  return (
    <>
      <div className="sticky top-0 z-10">
        <Header />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Lyout;
