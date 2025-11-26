import Header from "../componetns/common/Header";
import Hero from "../componetns/home/Hero";
import Service from "../componetns/home/Service";

const Home = () => {
  return (
    <>
      <div className="sticky top-0 z-10">
        <Header />
      </div>

      <Hero />
      <Service />
    </>
  );
};

export default Home;
