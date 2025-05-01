import { links } from "@/utils/pathHelpers";
import React from "react";
import NavItem from "./nav-item";
import HeaderButton from "./header-button";

export default function Nav() {
  return (
    <div className="hidden lg:flex gap-x-6 justify-end items-center">
      {links.map((item) => (
        <NavItem {...item} key={item?.label} />
      ))}
      <HeaderButton />
    </div>
  );
}
