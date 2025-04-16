"use client";

import { NavLink } from "@/utils/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({ href, label }: NavLink) {
  const pathname = usePathname();
  const isActive = href === pathname;
  return (
    <Link
      className={` text-xl leading-7 p-0.5 px-1 capitalize ${
        isActive ? "bg-primary rounded" : ""
      } transition-all duration-75 hover:bg-primary/40 rounded `}
      href={href}
    >
      {label}
    </Link>
  );
}
