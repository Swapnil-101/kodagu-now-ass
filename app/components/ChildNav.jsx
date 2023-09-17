import React from 'react'

const ChildNav = () => {
    return (
        <div className="up w-full  flex items-center justify-center">
            <div className="w-[98%] rounded-lg min-h-56 sidebar mt-5 px-6  py-12 flex items-center justify-start lg:justify-around">
                <div className="h-[80%] items-start justify-center flex flex-col ">
                    <div className="flex gap-2 items-center justify-center">
                        <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center">
                            <i className="ri-arrow-left-line"></i>
                        </div>
                        <h1 className="text-2xl font-bold  text-white">
                            School November Tasks
                        </h1>
                    </div>
                    <p className="text-xs my-2 text-gray-500">
                        Created by Instructor Day on November 31, 2022
                    </p>
                    <div className="flex items-center flex-wrap justify-start gap-4">
                        <div className="flex">
                            <div className="w-6 h-6 clip bg-gray-200"></div>
                            <div className="w-6 h-6 clip bg-gray-200"></div>
                            <div className="w-6 h-6 clip bg-gray-200"></div>
                            <div className="w-6 h-6 clip bg-gray-200"></div>
                            <div className="w-6 h-6 text-xs text-white font-bold flex items-center justify-center  rounded-xl bg-pink-500">
                                5+
                            </div>
                        </div>
                        <button className="py-2 px-3 bg-purple-600 text-xs rounded-xl text-white font-bold">
                            <i className="ri-user-add-fill mr-1 text-sm"></i> Invite
                            People
                        </button>
                        <button className="py-2 px-4 border border-blue-300 font-bold text-xs rounded-xl text-white">
                            Private
                        </button>
                        <button className="py-2 px-4 bg-blue-400 text-white text-xs font-bold rounded-xl">
                            Edit
                        </button>
                        <button className="py-2 px-3 border border-blue-300 text-white text-xs font-bold rounded-xl">
                            <i className="ri-message-2-fill mr-2 text-sm"></i>45
                            Comments
                        </button>
                    </div>
                    <div className="flex items-center mt-4 lg:hidden justify-center gap-2">
                        <p className="text-base text-white">Total Progress 60%</p>
                        <div className="w-56 h-3 rounded-full  bg-gray-700">
                            <div className="w-[60%] h-full bg-purple-600 rounded-full"></div>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="h-[80%] hidden lg:flex flex-col items-end justify-center">
                    <div className="flex gap-3 justify-end items-center">
                        <div className="flex flex-col items-end justify-center">
                            <h3 className="text-base font-semibold text-white">
                                Centered Martial Arts
                            </h3>
                            <p className=" text-xs  text-gray-400">Sunnyvale, Ca</p>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-gray-100"></div>
                        <i className="ri-list-check text-white"></i>
                    </div>
                    <div className="flex items-center mt-3 justify-center gap-2">
                        <p className="text-base text-white">Total Progress 60%</p>
                        <div className="w-56 h-3 rounded-full  bg-gray-700">
                            <div className="w-[60%] h-full bg-purple-600 rounded-full"></div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChildNav