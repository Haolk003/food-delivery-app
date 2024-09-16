"use client";

import React, { useState } from "react";
import NavItem from "./NavItem";
import ProfileDropdown from "./ProfileDropdown";

const Header = () => {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div className="bg-gray3 w-full h-[80px] text-white flex items-center justify-between px-10">
      <h2 className="text-[20px] font-[600]">Becodemy</h2>
      <NavItem activeItem={activeItem} />
      <ProfileDropdown />
    </div>
  );
};

export default Header;
