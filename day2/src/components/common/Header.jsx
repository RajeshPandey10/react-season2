
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
             <Logo/>
            </a>
          </div>
          <div className="md:flex md:items-center md:gap-12">
           <Navbar/>
          
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
