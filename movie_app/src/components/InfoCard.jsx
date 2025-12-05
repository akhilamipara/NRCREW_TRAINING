function InfoCard({ icon, label, value, colorFrom, colorTo, borderColor }) {
  return (
    <div className={`p-4 bg-gradient-to-br ${colorFrom} ${colorTo} rounded-xl border-2 ${borderColor}`}>
      <strong className="text-gray-800 flex items-center gap-2">
        <span className="text-xl">{icon}</span> {label}:
      </strong>
      <p className="text-gray-700 font-semibold mt-1">{value}</p>
    </div>
  );
}

export default InfoCard;
