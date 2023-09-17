import React from 'react'

const InProgress = () => {
    return (
        <div className="flex w-72  flex-col items-center justify-start">
            <div className="p-3 w-full flex items-center justify-between">
                <h3 className="text-white font-bold">In Progress(2)</h3>
                <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-blue-900">
                    <i className="ri-add-fill font-bold text-white"></i>
                </div>
            </div>
            <div>
                <div className="w-full mt-3  h-48 flex flex-col items-start justify-start  p-4 rounded-xl bg-blue-800">
                    <div className="flex w-full items-center mt-2 justify-between">
                        <h3 className="text-xs font-bold text-blue-300">Video</h3>
                        <i className="ri-list-check text-white"></i>
                    </div>
                    <p className="text-sm font-semibold mt-2 text-white">
                        Create sparring tutorial video for the weekly class.
                    </p>
                    <div className="w-60 h-2 rounded-full mt-3  bg-gray-800">
                        <div className="w-[90%] h-full bg-blue-300 rounded-full"></div>
                    </div>
                    <div className="w-full flex items-center mt-5 justify-between">
                        <div className="flex">
                            <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                            <div className="w-6 h-6 clip bg-gray-200"></div>
                            <div className="w-6 h-6 clip bg-gray-200"></div>
                        </div>
                        <p className="text-xs text-gray-300">Due in 4 days</p>
                    </div>
                </div>
                {/* rotate-12 */}
                <div className="w-full mt-6 h-48 flex flex-col items-start justify-start  p-4 rounded-xl bg-blue-800">
                    <div className="flex w-full items-center mt-2 justify-between">
                        <h3 className="text-xs font-bold text-red-500">
                            BUGS FIXING
                        </h3>
                        <i className="ri-list-check text-white"></i>
                    </div>
                    <p className="text-sm font-semibold mt-2 text-white">
                        Payment gatewat needs reauthorization.
                    </p>
                    <div className="w-60 h-2 rounded-full mt-3  bg-gray-800">
                        <div className="w-[98%] h-full bg-red-500 rounded-full"></div>
                    </div>
                    <div className="w-full flex items-center mt-5 justify-between">
                        <div className="flex">
                            <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                            <div className="w-6 h-6 clip bg-gray-200"></div>
                            <div className="w-6 h-6 clip bg-gray-200"></div>
                            <div className="w-6 h-6 clip bg-gray-200"></div>
                        </div>
                        <p className="text-xs text-gray-300">Due in 4 days</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InProgress