import { links } from "@/utils/pathHelpers";
import React from "react";
import MenuItem from "./menu-item";

export default function FooterMenu() {
  return (
    <ul className="flex justify-center items-center gap-10">
      {links.map((link) => (
        <MenuItem key={link.href} {...link} />
      ))}
    </ul>
  );
}
