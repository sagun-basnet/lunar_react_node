import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='px-12 flex justify-between  items-center h-[5rem] bg-slate-700 text-white'>
            <div className='text-3xl font-bold grid place-items-center'>
                Logo
            </div>

            <ul className='flex gap-4'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className='flex gap-4'>
                <button className='hover:bg-red-700 p-2 px-4 font-bold rounded-md bg-red-500'>Sign Up</button>
                <button className='hover:bg-red-700 p-2 px-4 font-bold rounded-md bg-red-500'>Register</button>
            </div>
        </nav>
    )
}

export default Navbar