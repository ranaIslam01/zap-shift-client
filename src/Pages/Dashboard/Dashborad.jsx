import React from 'react';
import { Package, CheckCircle, Wallet, ArrowUpRight } from 'lucide-react';

const Dashboard = () => {
    const stats = [
        { 
            label: 'Pending Orders', 
            value: '05', 
            icon: <Package size={24} />, 
            bgColor: 'bg-primary-green/20', 
            textColor: 'text-secondary-green' 
        },
        { 
            label: 'Completed', 
            value: '12', 
            icon: <CheckCircle size={24} />, 
            bgColor: 'bg-primary-black', 
            textColor: 'text-primary-green' 
        },
        { 
            label: 'Total Spent', 
            value: '৳ 2,500', 
            icon: <Wallet size={24} />, 
            bgColor: 'bg-primary-white/40', 
            textColor: 'text-primary-black' 
        },
    ];

    return (
        <div className="space-y-10 p-2">
            {/* Header Section */}
            <div className="flex flex-col gap-1">
                <h2 className="text-3xl font-black text-primary-black tracking-tight uppercase">Dashboard</h2>
                <p className="text-secondary-black font-medium">Welcome back! Here's your delivery overview.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <div 
                        key={index} 
                        className="bg-white p-8 rounded-4xl border border-primary-white shadow-sm hover:shadow-md transition-all group"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-4 rounded-2xl ${stat.bgColor} ${stat.textColor} transition-transform group-hover:scale-110`}>
                                {stat.icon}
                            </div>
                            <span className="text-secondary-black/30"><ArrowUpRight size={20}/></span>
                        </div>
                        <p className="text-secondary-black font-black uppercase text-[10px] tracking-[0.2em]">{stat.label}</p>
                        <h3 className={`text-3xl font-black mt-2 text-primary-black tracking-tighter`}>
                            {stat.value}
                        </h3>
                    </div>
                ))}
            </div>

            {/* Content Section - Recent Deliveries */}
            <div className="bg-white rounded-[2.5rem] border border-primary-white shadow-sm p-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className="text-xl font-black text-primary-black uppercase tracking-tighter">Recent Deliveries</h3>
                        <div className="h-1 w-10 bg-primary-green mt-1 rounded-full"></div>
                    </div>
                    <button className="bg-primary-white/50 text-primary-black px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-primary-green transition-all">
                        View All
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-separate border-spacing-y-3">
                        <thead>
                            <tr className="text-secondary-black text-[10px] font-black uppercase tracking-widest">
                                <th className="px-4 pb-2">Tracking ID</th>
                                <th className="px-4 pb-2">Recipient</th>
                                <th className="px-4 pb-2">Status</th>
                                <th className="px-4 pb-2 text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 3, 4].map((_, i) => (
                                <tr key={i} className="group transition-all">
                                    <td className="bg-gray-50/50 px-4 py-5 rounded-l-2xl font-bold text-primary-black text-sm group-hover:bg-primary-white/20">
                                        #ZS-99230{i}
                                    </td>
                                    <td className="bg-gray-50/50 px-4 py-5 font-bold text-secondary-black text-sm group-hover:bg-primary-white/20">
                                        Rahim Ahmed
                                    </td>
                                    <td className="bg-gray-50/50 px-4 py-5 group-hover:bg-primary-white/20">
                                        <span className="bg-primary-green/20 text-secondary-green px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter border border-secondary-green/10">
                                            Processing
                                        </span>
                                    </td>
                                    <td className="bg-gray-50/50 px-4 py-5 text-right rounded-r-2xl font-black text-primary-black group-hover:bg-primary-white/20">
                                        ৳ 120
                                    </td>
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