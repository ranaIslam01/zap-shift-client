const StatsCard = ({ title, count, color }) => {
  return (
    <div className={`${color} p-6 rounded-3xl shadow-sm border border-opacity-20`}>
      <p className="text-gray-600 text-sm font-medium">{title}</p>
      <h3 className="text-3xl font-bold mt-2">{count}</h3>
    </div>
  );
};
export default StatsCard;