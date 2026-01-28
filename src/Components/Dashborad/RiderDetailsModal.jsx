import React from "react";
import { X, MapPin, CreditCard, Bike, Phone, Mail, User, BadgeCheck } from "lucide-react";

const RiderDetailsModal = ({ rider, onClose }) => {
  if (!rider) return null;

  return (
    <div className="fixed inset-0 bg-primary-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-4xl max-w-2xl w-full overflow-hidden relative shadow-2xl animate-in fade-in zoom-in duration-300 border border-gray-100">
        
        {/* Modal Header - Dark Theme */}
        <div className="bg-primary-black p-6 md:p-8 text-white flex justify-between items-start">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#d1f366] text-primary-black rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg">
              {rider.name?.charAt(0)}
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight">{rider.name}</h3>
              <p className="text-[#d1f366] text-xs font-bold uppercase tracking-widest mt-1">
                Professional Rider
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="bg-white/10 hover:bg-[#d1f366] hover:text-primary-black p-2 rounded-full transition-all"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-8">
          
          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Personal & Contact */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] border-l-4 border-[#d1f366] pl-3">
                Contact Information
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail size={16} className="text-primary-black" />
                  <span className="text-sm font-medium">{rider.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone size={16} className="text-primary-black" />
                  <span className="text-sm font-bold">{rider.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin size={16} className="text-primary-black" />
                  <span className="text-sm">{rider.district}, {rider.region}</span>
                </div>
              </div>
            </div>

            {/* Identity & Vehicle */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] border-l-4 border-[#d1f366] pl-3">
                Identity & Vehicle
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <CreditCard size={16} className="text-primary-black" />
                  <span className="text-sm">NID: <span className="font-mono font-bold">{rider.nid}</span></span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <BadgeCheck size={16} className="text-primary-black" />
                  <span className="text-sm">License: <span className="font-mono font-bold">{rider.license}</span></span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Bike size={16} className="text-primary-black" />
                  <span className="text-sm font-bold uppercase">{rider.bikeBrandModel}</span>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-2">
              <User size={12} /> Rider's Bio
            </p>
            <p className="text-gray-600 text-sm leading-relaxed italic">
              "{rider.about || "No biography provided by the rider."}"
            </p>
          </div>

          {/* Action Button */}
          <button
            onClick={onClose}
            className="w-full bg-primary-black hover:bg-[#022a2f] text-[#d1f366] py-4 rounded-2xl font-black transition-all shadow-lg shadow-primary-black/20 uppercase tracking-widest text-sm"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default RiderDetailsModal;