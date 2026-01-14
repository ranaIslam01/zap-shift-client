const RecentOrders = () => {
  const data = [
    { id: '#ZS101', destination: 'Dhaka', status: 'In Transit' },
    { id: '#ZS102', destination: 'Chittagong', status: 'Delivered' },
    { id: '#ZS103', destination: 'Sylhet', status: 'Pending' },
  ];

  return (
    <table className="w-full text-left">
      <thead>
        <tr className="text-gray-400 border-b">
          <th className="pb-3">Order ID</th>
          <th className="pb-3">Destination</th>
          <th className="pb-3">Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((order) => (
          <tr key={order.id} className="border-b last:border-0">
            <td className="py-4 font-medium">{order.id}</td>
            <td className="py-4 text-gray-600">{order.destination}</td>
            <td className="py-4">
               <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">
                 {order.status}
               </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecentOrders;