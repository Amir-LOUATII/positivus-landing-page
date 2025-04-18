import { links } from "@/utils/pathHelpers";
import React from "react";
import MenuItem from "./menu-item";

export default function FooterMenu() {
  return (
    <ul className="flex justify-center items-center max-md:flex-col max-md:gap-2.5 max-md:mt-3.5 gap-10">
      {links.map((link) => (
        <MenuItem key={link.href} {...link} />
      ))}
    </ul>
  );
}
