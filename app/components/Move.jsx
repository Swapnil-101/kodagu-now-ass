import React from 'react'

const Move = () => {
    return (
        <div className="flex w-72  flex-col items-center justify-start">
            <div className="p-3 w-full flex items-center justify-between">
                <h3 className="font-bold text-white">Revised(0)</h3>
                <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-blue-900">
                    <i className="ri-add-fill font-bold text-white"></i>
                </div>
            </div>
            <div className="w-full">
                <div className="w-full mt-3 h-20 rounded-xl flex items-center justify-center bg-blue-800">
                    <div className="w-[80%] h-[60%] rounded-xl sidebar outline-white outline-dotted flex items-center justify-center">
                        <p className="text-sm font-semibold text-blue-800">
                            Move card here
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Move