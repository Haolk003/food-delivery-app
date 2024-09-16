import Link from "next/link";

import React from "react";

const navItems = [
  { title: "Home", url: "/" },
  { title: "About us", url: "/about" },
  { title: "Restaurants", url: "/restaurants" },
  { title: "Popular Food", url: "/foods" },
  { title: "Contact us", url: "/contact" },
];
const NavItem = ({ activeItem = 0 }: { activeItem: number }) => {
  return (
    <nav className="flex items-center gap-5">
      {navItems.map((item, index) => {
        return (
          <Link
            href={item.url}
            key={index}
            className={`px-5 text-[16px] font-Poppins font-[500] ${
              activeItem === index && "text-[#37b668]"
            }`}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavItem;
