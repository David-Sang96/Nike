import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header className="padding-x absolute z-10 w-full py-8">
      <nav className="flex items-center justify-between">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="font-montserrat text-lg leading-normal text-slate-gray"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
