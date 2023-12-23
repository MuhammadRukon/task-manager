import { Link } from "react-router-dom";
import MenuDropdown from "./MenuDropdown";
import Container from "../container/Container";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-[#fff] z-10 shadow-sm">
      <div className="py-[31px] border-b-[1px] border-[#EFEFEF]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <Link to="/">
              <p className="font-integralCf text-primary font-bold text-2xl">
                Task
              </p>
            </Link>
            <div className="h-8 w-[1px] hidden lg:block bg-[#EFEFEF]"></div>
            {/* menu items */}
            <div className="hidden md:block">
              <Link
                to="/task-manager"
                className="group hover:bg-[#EFEFEF] relative px-4 py-3 transition font-semibold"
              >
                Task manager
                <div className="w-0 absolute left-[50%] bottom-0 group-hover:left-0 h-[2px] group-hover:w-full transition-all group-hover:bg-primary"></div>
              </Link>
              <Link
                to="/about"
                className="group hover:bg-[#EFEFEF] relative px-4 py-3 transition font-semibold"
              >
                About
                <div className="w-0 absolute left-[50%] bottom-0 group-hover:left-0 h-[2px] group-hover:w-full transition-all group-hover:bg-primary"></div>
              </Link>
              <Link
                to="/contact"
                className="group hover:bg-[#EFEFEF] relative px-4 py-3 transition font-semibold"
              >
                Contact
                <div className="w-0 absolute left-[50%] bottom-0 group-hover:left-0 h-[2px] group-hover:w-full transition-all group-hover:bg-primary"></div>
              </Link>
            </div>
            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
