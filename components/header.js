import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-2 bg-white shadow-md">
      <Link href="/" className="flex items-center space-x-2">
        <img
          src="/logo.png"
          alt="Header logo"
          className="w-12 h-12 object-cover"
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
  );
}
