import React, { useEffect, useState } from "react";
import { Eye, Download, Trash2, X, Package, Calendar } from "lucide-react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { ClipLoader } from "react-spinners";

const MyParcel = () => {
  const [parcels, setParcels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedParcel, setSelectedParcel] = useState(null);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const fetchData = async () => {
    try {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      setParcels(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error Fetching Parcels", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user?.email, axiosSecure]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this parcel?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#03373d",
      cancelButtonColor: "#606060",
      confirmButtonText: "Yes, Delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.delete(`/parcels/${id}`);

          if (res.data.deletedCount > 0) {
            setParcels((prevParcels) =>
              prevParcels.filter((parcel) => parcel._id !== id)
            );

            Swal.fire(
              "Deleted!",
              "Parcel has been deleted successfully.",
              "success"
            );
          }
        } catch (error) {
          Swal.fire(
            "Error!",
            error.response?.data?.message || "Failed to delete parcel.",
            "error"
          );
        }
      }
    });
  };


  return (
    <div className="w-full bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-primary-white">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-extrabold text-primary-black tracking-tight">
          My Parces
        </h2>
        <button className="flex items-center gap-2 bg-primary-green text-primary-black px-4 py-2 rounded-lg font-bold hover:bg-opacity-90 transition-all">
          <Download size={18} />
          <span className="hidden sm:inline">Export</span>
        </button>
      </div>

      <div>
        {loading ? (
          <div className="min-h-100 w-full flex flex-col justify-center items-center gap-4">
      <ClipLoader color="#03373d" size={50} speedMultiplier={0.8} />
      <p className="text-secondary-black/60 font-medium animate-pulse">
        Loading your parcel data...
      </p>
    </div>
        ) : (
          <div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-separate border-spacing-y-2">
                <thead>
                  <tr className="text-secondary-black uppercase text-[11px] font-black tracking-widest">
                    <th className="px-4 py-3">Parcel Info</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {parcels.map((parcel) => (
                    <tr
                      key={parcel._id}
                      className="bg-gray-50 hover:bg-primary-white/30 transition-all group"
                    >
                      <td className="px-4 py-4 rounded-l-xl">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary-green/20 text-secondary-green rounded-lg">
                            <Package size={20} />
                          </div>
                          <span className="font-bold text-primary-black">
                            {parcel.parcelName}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-secondary-black font-medium">
                        {new Date(parcel.orderDate).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                            parcel.status === "delivered"
                              ? "bg-primary-green text-secondary-green"
                              : "bg-primary-white text-secondary-black"
                          }`}
                        >
                          {parcel.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 rounded-r-xl text-center">
                        <div className="flex justify-center gap-3">
                          <button
                            onClick={() => setSelectedParcel(parcel)}
                            className="text-primary-black hover:text-secondary-green transition"
                          >
                            <Eye size={18} />
                          </button>
                          <button
                            onClick={() => handleDelete(parcel._id)}
                            className="text-red-500 hover:scale-110 transition"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* --- Stylish Details Modal with Your Theme --- */}
            {selectedParcel && (
              <div className="fixed inset-0 bg-primary-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-4xl max-w-2xl w-full overflow-hidden relative shadow-2xl animate-in fade-in zoom-in duration-300 border border-primary-white">
                  {/* Modal Header */}
                  <div className="bg-primary-black p-8 text-white flex justify-between items-center">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-primary-green">
                        Parcel Details
                      </h3>
                      <p className="text-primary-white/60 text-xs mt-1 uppercase tracking-widest">
                        ID: {selectedParcel._id.slice(-6)}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedParcel(null)}
                      className="bg-primary-white/10 hover:bg-primary-green hover:text-primary-black p-2 rounded-full transition-all"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Sender Info */}
                      <div className="space-y-4">
                        <h4 className="text-[10px] font-black text-secondary-green uppercase tracking-widest border-l-4 border-primary-green pl-3">
                          Sender Details
                        </h4>
                        <div className="space-y-1">
                          <p className="text-lg font-extrabold text-primary-black">
                            {selectedParcel.senderName}
                          </p>
                          <p className="text-secondary-black text-sm font-bold">
                            {selectedParcel.senderContact}
                          </p>
                          <p className="text-secondary-black/80 text-sm leading-relaxed">
                            {selectedParcel.senderAddress},{" "}
                            {selectedParcel.senderRegion}
                          </p>
                        </div>
                      </div>

                      {/* Receiver Info */}
                      <div className="space-y-4">
                        <h4 className="text-[10px] font-black text-secondary-green uppercase tracking-widest border-l-4 border-primary-green pl-3">
                          Receiver Details
                        </h4>
                        <div className="space-y-1">
                          <p className="text-lg font-extrabold text-primary-black">
                            {selectedParcel.receiverName}
                          </p>
                          <p className="text-secondary-black text-sm font-bold">
                            {selectedParcel.receiverContact}
                          </p>
                          <p className="text-secondary-black/80 text-sm leading-relaxed">
                            {selectedParcel.receiverAddress},{" "}
                            {selectedParcel.receiverRegion}
                          </p>
                        </div>
                      </div>

                      {/* Logistics Info Card */}
                      <div className="col-span-1 md:col-span-2 bg-primary-green/10 rounded-2xl p-6 flex flex-wrap gap-10 border border-primary-green/20">
                        <div className="space-y-1">
                          <p className="text-secondary-green text-[10px] font-black uppercase">
                            Parcel Type
                          </p>
                          <p className="text-primary-black font-extrabold">
                            {selectedParcel.parcelType}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-secondary-green text-[10px] font-black uppercase">
                            Weight
                          </p>
                          <p className="text-primary-black font-extrabold">
                            {selectedParcel.parcelWeight} kg
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-secondary-green text-[10px] font-black uppercase">
                            Charge Status
                          </p>
                          <p className="text-primary-black font-black text-lg">
                            PAID
                          </p>
                        </div>
                      </div>

                      {/* Instruction */}
                      <div className="col-span-1 md:col-span-2">
                        <p className="text-secondary-black text-[10px] font-black uppercase mb-2">
                          Instruction
                        </p>
                        <p className="text-primary-black text-sm bg-primary-white/30 p-4 rounded-xl border border-primary-white italic">
                          "
                          {selectedParcel.deliveryInstruction ||
                            "No specific instructions provided."}
                          "
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedParcel(null)}
                      className="mt-10 w-full bg-primary-black hover:bg-main-black text-primary-green py-4 rounded-2xl font-black transition-all shadow-lg shadow-primary-black/20 uppercase tracking-widest"
                    >
                      Close Details
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyParcel;
