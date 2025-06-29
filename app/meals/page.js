import MealsGrid from "@/components/meals-grid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";

export default async function MealsPage() {
  const meals = await getMeals();

  return (
    <main className="relative flex flex-col items-center justify-center w-full px-6 py-12 z-30 text-center">
      <header className="max-w-4xl w-full space-y-6">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Delicious Meals, Created <span className="text-primary">by You</span>
        </h1>
        <p className="text-lg text-gray-600">
          Choose your favorite recipe and cook it yourself. It's easy and fun!
        </p>
        <p className="text-md text-white bg-orange-400 rounded-xl py-2 px-4 w-fit mx-auto border-2 border-white">
          <Link href="/meals/share">Share your favorite recipes</Link>
        </p>
      </header>

      <main className="max-w-4xl w-full mt-16">
        <MealsGrid meals={meals} />
      </main>
    </main>
  );
}
