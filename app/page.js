import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center w-full px-6 py-10 z-30 text-center">
      <header className="max-w-3xl space-y-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            MyBestMeals — Food for Passionate Foodies
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover, enjoy, and share your best homemade meals with the world.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Link
            href="/community"
            className="px-6 py-3 rounded-full bg-primary font-medium hover:bg-primary/80 transition"
          >
            Join the Community
          </Link>
          <Link
            href="/meals"
            className="px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 transition"
          >
            Explore Meals
          </Link>
        </div>
      </header>

      <section className="max-w-2xl mt-20 text-left space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">How it works</h2>
        <p className="text-gray-600">
          MyBestMeals is a platform where you can share your best recipes and
          food creations. Browse dishes from others, post your own meals, and
          connect with a global food-loving community.
        </p>
        <p className="text-gray-600">
          Whether you're a home cook, aspiring chef, or just love to eat —
          MyBestMeals is the place to be.
        </p>
      </section>

      <section className="max-w-2xl mt-12 text-left space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Why MyBestMeals?
        </h2>
        <p className="text-gray-600">
          Because every meal has a story. MyBestMeals helps you celebrate your
          favorite dishes and discover new ones from foodies around the world.
        </p>
        <p className="text-gray-600">
          Share what you cook, find inspiration, and join a growing community
          that appreciates good food made with love.
        </p>
      </section>
    </main>
  );
}
