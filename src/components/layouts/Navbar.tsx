import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="z-50 w-full h-16 bg-slate-100">
      <nav className="flex items-center justify-between gap-4 h-full w-full mx-auto max-w-[1220px] px-[20px]">
        <Link to={"/"} className="text-3xl">
          iRepair
        </Link>
        <ul className="list-none space-x-5">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <Button>
            <Link to={"/login"} className="font-bold">
              Login
            </Link>
          </Button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
