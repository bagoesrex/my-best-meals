export default function MealsPage() {
  return (
    <main className="relative flex flex-col items-center justify-center w-full px-6 py-12 z-30 text-center">
      <header className="max-w-4xl w-full space-y-6">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Delicious Meals, Created <span className="text-primary">by You</span>
        </h1>
        <p className="text-lg text-gray-600">
          Choose your favorite recipe and cook it yourself. It's easy and fun!
        </p>
        <p className="text-lg text-gray-600">
          Share your favorite recipes and inspire others to try new dishes.
        </p>
      </header>

      <main className="max-w-4xl w-full mt-16">
        <p className="text-gray-500 text-center">
            Todo Grid
        </p>
      </main>
    </main>
  );
}
