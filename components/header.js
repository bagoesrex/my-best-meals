import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/logo.png";
import HeaderBackground from "./header-background";
import NavLink from "./nav-link";

export default function Header() {
  return (
    <div className="relative z-10">
      <HeaderBackground />

      <header className="relative flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={Logo}
            alt="Header logo"
            className="w-12 h-12 object-cover"
            priority
          />
          <span className="text-xl font-bold text-gray-800">MY BEST MEALS</span>
        </Link>

        <nav>
          <ul className="flex gap-6 font-medium">
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
