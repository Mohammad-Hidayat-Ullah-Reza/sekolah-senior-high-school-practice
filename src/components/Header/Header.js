import React, { createContext, useState } from "react";
import Hero from "../Hero/Hero";
import MenuBar from "../MenuBar/MenuBar";
import Navbar from "../Navbar/Navbar";

export const RouteContext = createContext([]);

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = (open) => {
    setOpen(!open);
  };

  const routes = [
    { id: 1, name: "ABOUT", path: "/about" },
    { id: 2, name: "ACADEMICS", path: "/academics" },
    { id: 3, name: "EVENTS", path: "/events" },
    { id: 4, name: "TIMETABLE", path: "/timetable" },
    { id: 5, name: "GALLERY", path: "/gallery" },
    { id: 6, name: "TEACHERS", path: "/teachers" },
  ];

  return (
    <div>
      <RouteContext.Provider value={routes}>
        <Navbar open={open} handleToggle={handleToggle}></Navbar>
        <MenuBar open={open} handleToggle={handleToggle}></MenuBar>
      </RouteContext.Provider>
      <Hero></Hero>
    </div>
  );
};

export default Header;
