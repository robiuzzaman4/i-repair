import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="z-50 fixed top-0 w-full h-16 bg-slate-100"
    >
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
    </motion.header>
  );
};

export default Navbar;
