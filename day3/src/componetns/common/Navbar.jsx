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
          <Button butonkoname="Login" color="red"/>
           <Button butonkoname="Register" color="green"/>
            <Button butonkoname="call us" color="blue"/>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
