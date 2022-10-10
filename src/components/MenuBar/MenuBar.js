import React from "react";
import Links from "../Links/Links";
import { XMarkIcon } from "@heroicons/react/24/solid";

const MenuBar = ({ open, handleToggle }) => {
  return (
    <div
      className={`p-4 h-full absolute w-1/2 top-0 ${
        open ? "right-0" : "-right-1/2"
      } bg-white duration-200 ease-in`}
    >
      <XMarkIcon
        onClick={() => handleToggle(open)}
        className="w-6 h-6 text-blue-800"
      ></XMarkIcon>
      <Links
        className={"flex flex-col justify-evenly h-full py-5 text-black"}
      ></Links>
    </div>
  );
};

export default MenuBar;
