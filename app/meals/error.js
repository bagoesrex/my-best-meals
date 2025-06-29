"use client";

export default function Error() {
  return (
    <main className="relative flex flex-col items-center justify-center w-full px-6 py-12 z-30 text-center">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-md">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-700 mb-2">We couldn't load the meal data.</p>
        <p className="text-gray-500 text-sm">
          Please try again later or check your connection.
        </p>
      </div>
    </main>
  );
}
