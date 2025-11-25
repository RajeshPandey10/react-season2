import { navList } from "../../constant/navList";

const Navbar = () => {
  return (
    <>
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          {navList.map(({ name, button }) => (
            <li>
              {button ? (
                <a
                  className={`rounded-md ${
                    name == "Login"
                      ? "bg-teal-600 text-white"
                      : "bg-gray-100 text-teal-600"
                  } px-5 py-2.5 text-sm font-medium  shadow`}
                  href="/"
                >
                  {name}
                </a>
              ) : (
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  {name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
