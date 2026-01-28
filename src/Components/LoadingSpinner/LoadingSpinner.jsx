const LoadingSpinner = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] w-full space-y-4">
            {/* মেইন স্পিনার এনিমেশন */}
            <div className="relative flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                <div className="absolute w-8 h-8 border-4 border-t-orange-400 border-orange-100 rounded-full animate-ping"></div>
            </div>
            
            {/* টেক্সট এনিমেশন */}
            <div className="flex flex-col items-center">
                <h2 className="text-xl font-semibold text-gray-700 animate-pulse">
                    Loading Data...
                </h2>
                <p className="text-sm text-gray-400">Please wait a moment</p>
            </div>
        </div>
    );
};

export default LoadingSpinner;