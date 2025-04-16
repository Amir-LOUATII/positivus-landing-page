"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileLinkItemProps {
  href: string;
  label: string;
  onClick?: () => void;
}

function MobileLinkItem({ href, label, onClick }: MobileLinkItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      className={`block  text-sm sm:text-lg md:text-xl py-2 px-3 rounded capitalize transition-all duration-150 ${
        isActive ? "bg-primary  font-medium" : "hover:bg-primary/10"
      }`}
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

export default MobileLinkItem;
