import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/solid";
import Links from "../Links/Links";

const Navbar = ({ open, handleToggle }) => {
  return (
    <nav className="p-4 bg-blue-800 flex items-center justify-between">
      <div>
        <img
          className="w-40"
          src="logo.svg"
          alt="logo of sekolah high school"
        />
      </div>
      <div className="flex items-center">
        <Links className={"hidden lg:flex text-white"}></Links>
        <div className="flex items-center">
          <MagnifyingGlassIcon className="w-6 h-6 text-white mr-3"></MagnifyingGlassIcon>
          <div className="border rounded-sm p-1 lg:hidden">
            <Bars3Icon
              onClick={() => handleToggle(open)}
              className="w-6 h-6 text-white"
            ></Bars3Icon>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
