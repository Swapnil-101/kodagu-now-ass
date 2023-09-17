"use client"
import React, { useState } from 'react'
import Sidebar from './Sidebar'

const Navbar = () => {
    const [toggle,setToggle] = useState(false)
    return (
        <div className='w-full h-20   sidebar top-0 flex items-center justify-between px-6'>
          
           <div className='absolute lg:hidden'>
            <Sidebar handle = {toggle} setHandle = {setToggle}/>
           </div>
            <div className='flex lg:hidden gap-2 items-center justify-center'>
            <i onClick={()=>{setToggle(true)}} className="ri-menu-line text-white text-xl"></i>
            <h3 className='text-lg text-white'>Weframetech</h3>

            </div>
            <div className=' rounded-full w-64 lg:flex hidden px-2 bg-blue-900 items-center '>
                <i className="ri-search-line text-xl text-blue-300"></i>
                <input className='bg-blue-900 rounded-full outline-none border-none text-white text-xs  px-3 py-3' type="text" placeholder='Search here' />
            </div>
            <div className='lg:block hidden'>
                <a className='text-purple-700 text-xs underline' href="">OTHER MENUS</a>
            </div>
            <div className='lg:flex hidden gap-4 text-lg text-white'>
                <div className='relative'>
                    <div className='w-5 h-5 rounded-full text-xs -right-1 -top-1 absolute flex items-center justify-center bg-blue-500'>12</div>
                    <i className="ri-notification-fill text-2xl text-blue-300"></i>
                </div>
                <div className='relative'>
                <div className='w-5 h-5 rounded-full text-xs -right-1 -top-1 absolute flex items-center justify-center bg-blue-500'>5</div>
                    <i className="ri-movie-fill  text-2xl text-gray-500"></i>
                </div>
                <div className='relative'>
                <div className='w-5 h-5 rounded-full text-xs -right-1 -top-1 absolute flex items-center justify-center bg-blue-500'>2</div>
                    <i className="ri-task-fill text-2xl text-blue-300"></i>
                    </div>
                <div className='relative'>
                <div className='w-5 h-5 rounded-full text-xs -right-1 -top-1 absolute flex items-center justify-center bg-red-500'>!</div>
                    <i className="ri-inbox-fill text-2xl text-blue-300"></i>
                    </div>
            </div>
            <div className='w-32 rounded-full hidden  h-10 bg-blue-700 lg:flex items-center justify-evenly'>
                <div className='w-6 h-6 overflow-hidden rounded-full'>
                    <img className='w-full h-full object-cover' src="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg" alt="" />
                </div>
                <h3 className='text-xs text-white font-semibold'>ENGLISH</h3>
                <i className="ri-arrow-down-s-fill text-xl text-blue-300"></i>
            </div>
            <div className='w-44 h-10 flex items-center justify-evenly'>
                <div className='w-10 h-full rounded-lg bg-gray-200' ></div>
                <div className='flex items-center justify-between' >
                    <div className='flex flex-col items-start justify-center'>
                        <h3 className='text-white text-xs'>Instructor Day</h3>
                        <p className='text-blue-500 text-xs'>Super Admin</p>
                    </div>
                    <i className="ri-arrow-down-s-fill text-lg text-blue-300"></i>

                </div>
            </div>
        </div>
    )
}

export default Navbar
