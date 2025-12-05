function ErrorMessage({ message }) {
  return (
    <div className="text-center py-12">
      <div className="inline-block p-8 bg-gradient-to-br from-red-100 to-pink-100 rounded-3xl shadow-2xl border-2 border-red-300">
        <p className="text-6xl mb-4">❌</p>
        <p className="text-2xl font-bold text-red-600">{message}</p>
      </div>
    </div>
  );
}

export default ErrorMessage;
