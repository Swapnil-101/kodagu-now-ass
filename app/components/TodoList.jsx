import React from 'react'

const TodoList = () => {
    return (
        <div><div className="flex w-72  flex-col items-center justify-start">
            <div className="p-3 w-full flex items-center justify-between">
                <h3 className="text-white font-bold">To-Do List(24)</h3>
                <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-purple-600">
                    <i className="ri-add-fill font-bold text-white"></i>
                </div>
            </div>
            <div className="w-full">

                <div className="w-full mt-3  h-48 flex flex-col items-start justify-start  p-4 rounded-xl bg-blue-800">
                    <div className="flex w-full items-center mt-2 justify-between">
                        <h3 className="text-xs font-bold text-orange-300">
                            Important
                        </h3>
                        <i className="ri-list-check text-white"></i>
                    </div>
                    <p className="text-sm font-semibold mt-2 text-white">
                        Create sign up sheet for holiday student/parent
                        conferences.
                    </p>
                    <div className="w-60 h-2 rounded-full mt-3  bg-gray-800">
                        <div className="w-[30%] h-full bg-orange-600 rounded-full"></div>
                    </div>
                    <div className="w-full flex items-center mt-5 justify-between">
                        <div className="flex">
                            <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                            <div className="w-6 h-6 clip bg-gray-200"></div>
                            <div className="w-6 h-6 clip bg-gray-200"></div>
                            <div className="w-6 h-6 clip bg-gray-200"></div>
                        </div>
                        <p className="text-xs text-gray-300">Delay in 4 days</p>
                    </div>
                </div>

                <div className="w-full mt-3  h-48 flex flex-col items-start justify-start  p-4 rounded-xl bg-blue-800">
                    <div className="flex w-full items-center mt-2 justify-between">
                        <h3 className="text-xs font-bold text-pink-500">
                            Instructor Meeting
                        </h3>
                        <i className="ri-list-check text-white"></i>
                    </div>
                    <p className="text-sm font-semibold mt-2 text-white">
                        Plan holiday demonstration program. Create outline.
                    </p>
                    <div className="w-60 h-2 rounded-full mt-3  bg-gray-800">
                        <div className="w-[40%] h-full bg-pink-500 rounded-full"></div>
                    </div>
                    <div className="w-full flex items-center mt-5 justify-between">
                        <div className="flex">
                            <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                            <div className="w-6 h-6 clip bg-gray-200"></div>
                            <div className="w-6 h-6 clip bg-gray-200"></div>
                        </div>
                        <p className="text-xs text-gray-300">Delay in 4 days</p>
                    </div>
                </div>
                
                <div className="w-full mt-3  h-48 flex flex-col items-start justify-start  p-4 rounded-xl bg-blue-800">
                    <div className="flex w-full items-center mt-2 justify-between">
                        <h3 className="text-xs font-bold text-green-500">
                            Database
                        </h3>
                        <i className="ri-list-check text-white"></i>
                    </div>
                    <p className="text-sm font-semibold mt-2 text-white">
                        Determine how many boards need to be ordered for testing
                        and demo.
                    </p>
                    <div className="w-60 h-2 rounded-full mt-3  bg-gray-800">
                        <div className="w-[20%] h-full bg-green-500 rounded-full"></div>
                    </div>
                    <div className="w-full flex items-center mt-5 justify-between">
                        <div className="flex">
                            <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                            <div className="w-6 h-6 clip bg-gray-200"></div>
                        </div>
                        <p className="text-xs text-gray-300">Delay in 4 days</p>
                    </div>
                </div>

            </div>
        </div></div>
    )
}

export default TodoList