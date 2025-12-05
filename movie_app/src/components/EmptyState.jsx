function EmptyState({ icon, title, subtitle, actionButton }) {
  return (
    <div className="text-center py-24">
      <div className="inline-block p-16 bg-gradient-to-br from-white to-indigo-50 rounded-3xl shadow-2xl border-4 border-indigo-200 hover:scale-105 transition-transform duration-500">
        <p className="text-8xl mb-6">{icon}</p>
        <p className="text-3xl font-bold text-gray-800 mb-3">{title}</p>
        <p className="text-xl text-gray-600 mb-8">{subtitle}</p>
        {actionButton}
      </div>
    </div>
  );
}

export default EmptyState;
