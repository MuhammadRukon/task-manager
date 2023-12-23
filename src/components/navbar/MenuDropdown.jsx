import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import defaultUser from "../../assets/defaultUser.png";

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const { user } = useAuth();

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            {/* Avatar */}
            <img
              className="rounded-full"
              referrerPolicy="no-referrer"
              src={defaultUser}
              alt="profile"
              height="30"
              width="30"
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute z-30 rounded-xl bg-[#fff] shadow-[#d0d0d0] shadow-[0_0_6px_0px_rgba(0,0,0,0.1)] w-[40vw] lg:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <Link
              to="/task-manager"
              className="group hover:bg-[#EFEFEF] md:hidden relative px-4 py-3 transition font-semibold"
            >
              Task manager
              <div className="w-0 absolute left-[50%] bottom-0 group-hover:left-0 h-[2px] group-hover:w-full transition-all group-hover:bg-primary"></div>
            </Link>
            <Link
              to="/about"
              className="group hover:bg-[#EFEFEF] md:hidden relative px-4 py-3 transition font-semibold"
            >
              About
              <div className="w-0 absolute left-[50%] bottom-0 group-hover:left-0 h-[2px] group-hover:w-full transition-all group-hover:bg-primary"></div>
            </Link>
            <Link
              to="/contact"
              className="group hover:bg-[#EFEFEF] md:hidden relative px-4 py-3 transition font-semibold"
            >
              Contact
              <div className="w-0 absolute left-[50%] bottom-0 group-hover:left-0 h-[2px] group-hover:w-full transition-all group-hover:bg-primary"></div>
            </Link>
            <Link
              to="/login"
              className="group hover:bg-[#EFEFEF]  relative px-4 py-3 transition font-semibold"
            >
              login
              <div className="w-0 absolute left-[50%] bottom-0 group-hover:left-0 h-[2px] group-hover:w-full transition-all group-hover:bg-primary"></div>
            </Link>
            <Link
              to="/register"
              className="group hover:bg-[#EFEFEF]  relative px-4 py-3 transition font-semibold"
            >
              register
              <div className="w-0 absolute left-[50%] bottom-0 group-hover:left-0 h-[2px] group-hover:w-full transition-all group-hover:bg-primary"></div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;