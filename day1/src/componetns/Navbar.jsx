import { navList } from "../constant/navList";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-7 mt-4 justify-end pr-10 ">
        {navList.map(({ label, style, button }) =>
          button ? (
            <button
              
              className={`border border-amber-200 rounded-2xl px-4 py-2 cursor-pointer hover:bg-red-400 ${style=="red"?"text-red-500":"text-green-500"} hover:text-white transition-all`}
            >
              {label}
            </button>
          ) : (
            <li style={{ color: style }}>{label}</li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
