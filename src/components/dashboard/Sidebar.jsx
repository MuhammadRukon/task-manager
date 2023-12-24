import { useState } from "react";
// Icons
import { GrLogout } from "react-icons/gr";
import { AiOutlineBars, AiFillHome } from "react-icons/ai";
import defaultUser from "../../assets/defaultUser.png";

// components
import useAuth from "../../hooks/useAuth";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Sidebar = () => {
  const { logOut } = useAuth();
  const { user } = useAuth();
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-primary text-[white] flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              <p className="font-integralCf text-[white] font-bold text-2xl">
                Task
              </p>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-red-800"
        >
          <AiOutlineBars className="h-6 w-6" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col text-white justify-between overflow-x-hidden bg-base-200 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <Link
              to={"/"}
              className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-primary mx-auto"
            >
              <p className="font-integralCf text-[white] font-bold text-2xl">
                Task
              </p>
            </Link>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between text-[black] flex-1 mt-6">
            <nav>
              <MenuItem
                icon={AiFillHome}
                label="task-manager"
                address="/task-manager"
              />
            </nav>
          </div>
        </div>
        <div>
          <hr />
          <div className="p-4 md:py-1 md:px-2 gap-3">
            <div className="hidden md:block">
              {/* Avatar */}
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full bg-[white]"
                  referrerPolicy="no-referrer"
                  src={user ? user.photoURL : defaultUser}
                  alt="profile"
                  height="30"
                  width="30"
                />
                <p className="text-lg font-semibold">
                  {user ? user.displayName : "No user"}
                </p>
              </div>
            </div>
          </div>
          <button className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform">
            <GrLogout className="w-5 h-5" />

            <span
              onClick={() => {
                logOut();
                toast.success("successfully logged out");
              }}
              className="mx-4 font-medium"
            >
              Logout
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
