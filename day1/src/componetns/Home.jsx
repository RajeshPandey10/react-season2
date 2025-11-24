import React from 'react'

const Home = () => {
  return (
<>
 <section className="px-6 py-20 md:py-32 bg-white">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
    {/* Text Content */}
    <div className="md:w-1/2">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
        Step Into Style <br className="hidden md:block" />
        with <span className="text-orange-500">Classic Sneakers</span>
      </h1>
      <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
        Discover comfort, quality, and elegance in every step. Perfect for every occasion.
      </p>
      <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-200">
        Shop Now
      </a>
    </div>
    {/* Hero Image */}
    <div className="md:w-1/2">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzJOBc888horStIw5v_cpA6OOGG39NMeDgEg&s" alt="Hero Image" className="rounded-lg shadow-lg w-full" />
    </div>
  </div>
  
</section>

</>


  )
}

export default Home