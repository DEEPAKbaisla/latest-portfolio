"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-2xl font-bold mb-4">
        Something went wrong 😢
      </h1>

      <p className="text-gray-500 mb-6">
        {error?.message || "Unexpected error occurred"}
      </p>

      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-black text-white rounded-full"
      >
        Try Again
      </button>
    </div>
  );
}