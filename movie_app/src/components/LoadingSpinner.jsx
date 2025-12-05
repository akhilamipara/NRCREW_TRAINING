function LoadingSpinner({ message = "Loading..." }) {
  return (
    <div className="text-center py-24">
      <div className="inline-block relative">
        <div className="rounded-full h-20 w-20 border-t-4 border-b-4 border-indigo-600 mb-4"></div>
        <span className="absolute inset-0 flex items-center justify-center text-4xl">
          🎬
        </span>
      </div>
      <p className="mt-6 text-2xl font-semibold text-gray-600 flex items-center justify-center gap-2">
        <span className="text-3xl">🔍</span>
        {message}
        <span className="text-3xl">🔍</span>
      </p>
    </div>
  );
}

export default LoadingSpinner;
