import { getMeal } from "@/lib/meals";
import Image from "next/image";

export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.mealSlug);

  return (
    <main className="relative flex flex-col items-center justify-center w-full px-6 py-10 z-30 text-center">
      <header className="flex flex-row gap-6 max-w-3xl w-full text-left items-center justify-center">
        <div className="relative size-64 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={meal.image}
            alt={meal.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="w-90 space-y-4">
          <h1 className="text-4xl font-extrabold text-gray-800">
            {meal.title}
          </h1>
          <p className="text-lg italic text-orange-500">
            by{" "}
            <a
              href={`mailto:${meal.creator_email}`}
              className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent hover:drop-shadow-md"
            >
              {meal.creator}
            </a>
          </p>
          <p className="text-gray-600 text-lg">{meal.summary}</p>
        </div>
      </header>

      <section className="mt-6 space-y-4">
        <div className="bg-orange-100 text-gray-800 p-6 rounded-lg shadow-md text-left leading-relaxed whitespace-pre-line">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Instructions
          </h2>
          {meal.instructions}
        </div>
      </section>
    </main>
  );
}
