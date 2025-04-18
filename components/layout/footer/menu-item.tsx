import { NavLink } from "@/utils/types";
import Link from "next/link";
import React from "react";

export default function MenuItem({ href, label }: NavLink) {
  return (
    <li>
      <Link
        href={href}
        className="text-lg text-white hover:text-primary transition-all duration-150 decoration-1 capitalize text-nowrap"
      >
        {label}
      </Link>
    </li>
  );
}
