import Link from "next/link";
import Header from "./header";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen w-full">
      <Header />
      <h1 className="font-sans pt-2">My Fav Masakan Istri (Megumin)</h1>
      <p className="text-orange-500">
        <Link href={"/about"}>About Link</Link>
      </p>
    </main>
  );
}
