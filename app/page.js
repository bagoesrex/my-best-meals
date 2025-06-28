import Link from "next/link";
import Header from "../components/header";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen w-full">
      <Header />
      <h1 className="font-sans pt-2">My Fav Masakan Istri (Megumin)</h1>
      <p className="text-orange-500 underline underline-offset-4">
        <Link href={"/about"}>About Link</Link>
      </p>
      <p className="text-orange-500 underline underline-offset-4">
        <Link href={"/meals"}>Meals Link</Link>
      </p>
      <p className="text-orange-500 underline underline-offset-4">
        <Link href={"/meals/share"}>Share Meals Link</Link>
      </p>
      <p className="text-orange-500 underline underline-offset-4">
        <Link href={"/community"}>Community Link</Link>
      </p>
    </main>
  );
}
