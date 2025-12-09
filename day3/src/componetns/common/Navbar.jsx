import { Link } from "react-router-dom";
import { navMenu } from "../../constants/navMenu";
import Button from "./Button";

const Navbar = () => {

  return (
    <>
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          {navMenu.map((nav) => (
            <li>
              <Link
                className={`nav ${nav.isButton?(nav.label=="Register"?"register":"login"):""} `}
                to={nav.path}
              >
                
                {nav.label}
              </Link>
            </li>
          ))}
          {/* <Button name="Login" className="border bg-amber-500" />
           <Button name="Register" className="bg-blue-500"/> */}
            
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
