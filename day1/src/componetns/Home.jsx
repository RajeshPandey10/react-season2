import React from "react";

const Home = () => {
  return (
    <>
      <section className="py-16 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
          {/* Text Content */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Step Into Style <br className="hidden md:block" />
              with <span className="text-orange-500">Classic Sneakers</span>
            </h1>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
              Discover comfort, quality, and elegance in every step. Perfect for
              every occasion.
            </p>
            <a
              href="#"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-200"
            >
              Shop Now
            </a>
          </div>
          {/* Hero Image */}
          <div className="md:w-1/2">
            <img
              src="https://images.pexels.com/photos/34416926/pexels-photo-34416926.jpeg"
              alt="Hero Image"
              className="rounded-lg shadow-lg w-full h-[60vh]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
