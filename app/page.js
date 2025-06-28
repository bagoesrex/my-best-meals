import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>My Fav Masakan Istri (Megumin)</h1>
      <p>
        <Link href={"/about"}>About Link</Link>
      </p>
    </main>
  );
}
