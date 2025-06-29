import Image from "next/image";
import Link from "next/link";

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className="flex flex-col justify-between h-full rounded shadow-lg overflow-hidden transition-all duration-300 text-[#ddd6cb] bg-gradient-to-r from-[#2c1e19] to-[#25200f]">
      <header>
        <div className="relative h-60">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="px-4 pt-2">
          <h2 className="text-xl font-semibold font-montserrat m-0">{title}</h2>
          <p className="text-xs italic text-[#cfa69b]">by {creator}</p>
        </div>
      </header>

      <div className="flex flex-col justify-between h-full">
        <p className="px-4 pt-4">{summary}</p>
        <div className="px-4 py-4 text-right">
          <Link
            href={`/meals/${slug}`}
            className="inline-block mt-4 px-4 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-[#f9572a] to-[#ff9b05] hover:from-[#fd4715] hover:to-[#f9b241] hover:shadow-[0_0_12px_rgba(242,100,18,0.8)] transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
