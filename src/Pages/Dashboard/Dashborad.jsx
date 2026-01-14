import React from 'react';

const Dashboard = () => {
    const stats = [
        { label: 'Pending Orders', value: '05', color: 'bg-orange-100 text-orange-600' },
        { label: 'Completed', value: '12', color: 'bg-green-100 text-green-600' },
        { label: 'Total Spent', value: '৳ 2,500', color: 'bg-blue-100 text-blue-600' },
    ];

    return (
        <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <p className="text-gray-500 text-sm">{stat.label}</p>
                        <h3 className={`text-2xl font-bold mt-1 ${stat.color.split(' ')[1]}`}>{stat.value}</h3>
                    </div>
                ))}
            </div>

            {/* Content Section */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold">Recent Deliveries</h3>
                    <button className="text-[#89a52e] text-sm font-semibold hover:underline">View All</button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-gray-400 text-sm border-b">
                                <th className="pb-4 font-medium">Tracking ID</th>
                                <th className="pb-4 font-medium">Recipient</th>
                                <th className="pb-4 font-medium">Status</th>
                                <th className="pb-4 font-medium">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600">
                            {[1, 2, 3].map((_, i) => (
                                <tr key={i} className="border-b last:border-0">
                                    <td className="py-4">#ZS-99230{i}</td>
                                    <td className="py-4 font-medium text-gray-800">Rahim Ahmed</td>
                                    <td className="py-4">
                                        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">Processing</span>
                                    </td>
                                    <td className="py-4 font-semibold">৳ 120</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;