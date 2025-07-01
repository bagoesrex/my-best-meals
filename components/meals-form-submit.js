"use client";

import { useFormStatus } from "react-dom";

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-full shadow-md hover:from-orange-600 hover:to-yellow-500 transition disabled:opacity-50"
    >
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
