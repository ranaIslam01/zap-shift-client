import React from 'react';

const MyOrders = () => {
  const orders = [
    { id: 'ZS-1001', date: '12 Jan 2026', status: 'Delivered', amount: '৳ 150' },
    { id: 'ZS-1002', date: '14 Jan 2026', status: 'Pending', amount: '৳ 220' },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary-white">
      <h2 className="text-2xl font-bold mb-6 text-primary-black">My Orders</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-primary-white text-secondary-black">
              <th className="pb-4">Order ID</th>
              <th className="pb-4">Date</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b last:border-0 border-primary-white">
                <td className="py-4 font-medium text-main-black">{order.id}</td>
                <td className="py-4 text-secondary-black">{order.date}</td>
                <td className="py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    order.status === 'Delivered' 
                    ? 'bg-primary-green text-secondary-green' 
                    : 'bg-gray-100 text-gray-600'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-4 font-bold text-primary-black">{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;