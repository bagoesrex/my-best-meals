"use client";

export default function Error() {
  return (
    <main className="relative flex flex-col items-center justify-center w-full px-6 py-12 z-30 text-center">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-md">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-700 mb-2">failed to create meal.</p>

      </div>
    </main>
  );
}
