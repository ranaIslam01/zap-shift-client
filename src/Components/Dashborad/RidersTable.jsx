import React, { useEffect, useState } from "react";
// import { Eye, Download, Users, MapPin, BadgeCheck, Phone } from "lucide-react"; // Note: Lucide React use korechen kintu ekhane lucide-center likha, eita lucide-react hobe
import { Eye as EyeIcon, Download as DownloadIcon, Users as UsersIcon, MapPin as MapPinIcon, BadgeCheck as BadgeCheckIcon, Phone as PhoneIcon } from "lucide-react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { ClipLoader } from "react-spinners";
import RiderDetailsModal from "./RiderDetailsModal"; // Modal component import korun

const RidersTable = () => {
  const [riders, setRiders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRider, setSelectedRider] = useState(null); // Modal-er jonno state
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const fetchRiders = async () => {
    try {
      setLoading(true);
      const token = await user.getIdToken();
      const res = await axiosSecure.get("/riders", {
        params: { email: user?.email },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setRiders(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error Fetching Riders", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRiders();
  }, [axiosSecure, user]);

  return (
    <div className="w-full bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-300">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-extrabold text-primary-black tracking-tight">
            Rider Management
          </h2>
          <p className="text-gray-400 text-sm mt-1">Total registered delivery partners</p>
        </div>
        <button className="flex items-center gap-2 bg-[#d1f366] text-primary-black px-4 py-2 rounded-lg font-bold hover:bg-opacity-90 transition-all">
          <DownloadIcon size={18} />
          <span className="hidden sm:inline">Export CSV</span>
        </button>
      </div>

      <div>
        {loading ? (
          <div className="min-h-100 w-full flex flex-col justify-center items-center gap-4">
            <ClipLoader color="#03373d" size={50} speedMultiplier={0.8} />
            <p className="text-gray-500 font-medium animate-pulse">
              Fetching rider records...
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-separate border-spacing-y-3">
              <thead>
                <tr className="text-gray-500 uppercase text-[11px] font-black tracking-widest">
                  <th className="px-6 py-3">Rider Details</th>
                  <th className="px-6 py-3">Location</th>
                  <th className="px-6 py-3">License Info</th>
                  <th className="px-6 py-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {riders.map((rider) => (
                  <tr
                    key={rider._id}
                    className="bg-gray-50 hover:bg-[#d1f366]/10 transition-all group cursor-default"
                  >
                    {/* Rider Info */}
                    <td className="px-6 py-4 rounded-l-2xl">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-[#d1f366]/20 text-primary-black rounded-xl group-hover:bg-[#d1f366] transition-colors">
                          <UsersIcon size={20} />
                        </div>
                        <div>
                          <p className="font-extrabold text-primary-black text-base leading-none">
                            {rider.name}
                          </p>
                          <p className="text-gray-400 text-xs mt-1">{rider.email}</p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-gray-700">
                        <MapPinIcon size={14} className="text-gray-400" />
                        <div>
                          <p className="font-bold text-sm">{rider.district}</p>
                          <p className="text-[10px] uppercase text-gray-400 tracking-tighter">
                            {rider.region}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <div className="space-y-1 text-gray-600">
                        <p className="flex items-center gap-2 font-semibold">
                          <PhoneIcon size={12} /> {rider.phone}
                        </p>
                        <p className="flex items-center gap-2 text-[10px] font-black bg-gray-200 px-2 py-0.5 rounded w-fit">
                          <BadgeCheckIcon size={10} /> LIC: {rider.license}
                        </p>
                      </div>
                    </td>

                    <td className="px-6 py-4 rounded-r-2xl text-center">
                      <div className="flex justify-center gap-4">
                        <button 
                          onClick={() => setSelectedRider(rider)} // Click korle rider data set hobe
                          title="View Details"
                          className="p-2 text-primary-black hover:bg-white rounded-full transition shadow-sm"
                        >
                          <EyeIcon size={18} />
                        </button>
                        <button 
                          title="Contact"
                          className="p-2 text-blue-500 hover:bg-white rounded-full transition shadow-sm"
                        >
                          <PhoneIcon size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {riders.length === 0 && (
              <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-100">
                <p className="text-gray-400 font-medium">No riders registered yet.</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modal Show Korun */}
      {selectedRider && (
        <RiderDetailsModal 
          rider={selectedRider} 
          onClose={() => setSelectedRider(null)} 
        />
      )}
    </div>
  );
};

export default RidersTable;