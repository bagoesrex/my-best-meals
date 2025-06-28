import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/logo.png";
import HeaderBackground from "./header-background";

export default function Header() {
  return (
    <div className="relative z-10">
      <HeaderBackground />

      <header className="flex items-center justify-between px-6 py-4 relative">
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
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li>
              <Link
                href="/meals"
                className="hover:text-primary transition-colors duration-200"
              >
                Browse Meals
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className="hover:text-primary transition-colors duration-200"
              >
                Foodies Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
