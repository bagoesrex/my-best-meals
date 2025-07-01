"use client";

import ImagePicker from "@/components/image-picker";
import MealsFormSubmit from "@/components/meals-form-submit";
import { shareMeal } from "@/lib/action";
import { useFormState } from "react-dom";

export default function ShareMealPage() {
  const [state, formAction] = useFormState(shareMeal, { message: null });

  return (
    <main className="relative flex flex-col items-center w-full px-6 py-10 z-30 text-center">
      <header className="flex flex-col gap-6 max-w-4xl w-full mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Share your{" "}
          <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
            favorite meal
          </span>
        </h1>
        <p className="text-lg text-gray-600">
          Or any other meal you feel needs sharing!
        </p>
      </header>

      <section className="w-full max-w-2xl text-left space-y-6">
        <form className="space-y-6" action={formAction}>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <label
                htmlFor="name"
                className="block mb-1 text-sm font-semibold text-gray-700 uppercase"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 rounded border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-semibold text-gray-700 uppercase"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 rounded border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="title"
              className="block mb-1 text-sm font-semibold text-gray-700 uppercase"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="w-full p-3 rounded border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label
              htmlFor="summary"
              className="block mb-1 text-sm font-semibold text-gray-700 uppercase"
            >
              Short Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              required
              className="w-full p-3 rounded border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label
              htmlFor="instructions"
              className="block mb-1 text-sm font-semibold text-gray-700 uppercase"
            >
              Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              rows="8"
              required
              className="w-full p-3 rounded border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>

          <div className="text-gray-500 italic">
            <ImagePicker label="Meal Image" name="image" />
            {state.message && <p>{state.message}</p>}
          </div>

          <div className="text-right">
            <MealsFormSubmit />
          </div>
        </form>
      </section>
    </main>
  );
}
