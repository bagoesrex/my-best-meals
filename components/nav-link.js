"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const path = usePathname();
  const isActive = path.startsWith(href);

  return (
    <Link
      href={href}
      className={`transition-colors duration-200 ${
        isActive ? "text-white drop-shadow-sm " : "text-black"
      }`}
    >
      {children}
    </Link>
  );
}
