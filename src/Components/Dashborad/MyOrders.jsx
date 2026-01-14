import React from "react";
import { Eye, Download } from "lucide-react";

const MyOrders = () => {
  const orders = [
    {
      id: "ZS-1001",
      date: "12 Jan 2026",
      status: "Delivered",
      amount: "৳ 150",
    },
    { id: "ZS-1002", date: "14 Jan 2026", status: "Pending", amount: "৳ 220" },
    {
      id: "ZS-1003",
      date: "10 Jan 2026",
      status: "Processing",
      amount: "৳ 320",
    },
    {
      id: "ZS-1004",
      date: "08 Jan 2026",
      status: "Delivered",
      amount: "৳ 180",
    },
  ];

  return (
    <div className="w-full bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-primary-black">
        My Orders
      </h2>

      {/* Mobile View - Card Layout */}
      <div className="md:hidden space-y-3 sm:space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border border-gray-200 rounded-lg p-3 sm:p-4"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="font-semibold text-primary-black text-sm">
                  {order.id}
                </p>
                <p className="text-xs sm:text-sm text-gray-600">{order.date}</p>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
                  order.status === "Delivered"
                    ? "bg-primary-green text-secondary-green"
                    : order.status === "Pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                {order.status}
              </span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-gray-200">
              <p className="font-bold text-primary-black text-sm">
                {order.amount}
              </p>
              <button className="text-primary-green hover:text-secondary-green transition">
                <Eye size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View - Table Layout */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-300 text-secondary-black">
              <th className="pb-3 md:pb-4 font-semibold">Order ID</th>
              <th className="pb-3 md:pb-4 font-semibold">Date</th>
              <th className="pb-3 md:pb-4 font-semibold">Status</th>
              <th className="pb-3 md:pb-4 font-semibold">Amount</th>
              <th className="pb-3 md:pb-4 font-semibold text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-gray-200 last:border-0 hover:bg-gray-50 transition"
              >
                <td className="py-3 md:py-4 font-medium text-primary-black">
                  {order.id}
                </td>
                <td className="py-3 md:py-4 text-gray-600">{order.date}</td>
                <td className="py-3 md:py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      order.status === "Delivered"
                        ? "bg-primary-green text-secondary-green"
                        : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-3 md:py-4 font-bold text-primary-black">
                  {order.amount}
                </td>
                <td className="py-3 md:py-4 text-center">
                  <button className="text-primary-green hover:text-secondary-green transition inline-flex items-center gap-1">
                    <Eye size={18} />
                    <span className="hidden lg:inline text-xs">View</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200 flex justify-between items-center">
        <p className="text-xs sm:text-sm text-gray-600">
          Showing {orders.length} orders
        </p>
        <button className="flex items-center gap-2 text-primary-green hover:text-secondary-green transition text-sm font-semibold">
          <Download size={18} />
          <span>Export</span>
        </button>
      </div>
    </div>
  );
};

export default MyOrders;
