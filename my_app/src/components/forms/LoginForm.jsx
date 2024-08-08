import React, { useState } from 'react'
import myImage from '../../assets/image/login.jpg'
import axios from 'axios';

const LoginForm = () => {
    const initialValue = {
        email: '',
        password: '',
    }
    const [data, setData] = useState(initialValue);
    const [err, setErr] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5500/login', data).then((res) => {
            console.log(res.data, "response");

            setData(initialValue);
            setErr(res.data); // {message: "asdfasdfasdfasfd"}

        }).catch((err) => {
            console.log(err);
        })

    }

    // {...prev, email: 'name@gmail.com'}


    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev, [name]: value,
        }))
    }

    return (
        <div className='h-[100vh] grid place-items-center'>
            <div className="w-[80%] h-[90%] flex shadow-black shadow-lg">
                <div className="w-1/2 h-full">
                    <img className='w-full h-full' src={myImage} alt="" />
                </div>
                <div className="w-1/2 grid place-items-center">
                    <form onSubmit={handleSubmit} action="" className='flex flex-col w-full gap-4 p-8'>
                        <h1 className='text-6xl font-bold uppercase'>Login</h1>

                        <input className='w-full border-b-2 p-2  border-black' type="email" placeholder='Enter Email' name='email' onChange={handleChange} value={data.email} />

                        <input className='w-full border-b-2 p-2  border-black' type="password" placeholder='Enter Password' name='password' onChange={handleChange} value={data.password} />

                        <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>Login</button>

                    </form>
                    <p> {err.Message} </p>
                    <span className='underline'>New user? Register now</span>
                </div>
            </div>
        </div>
    )
}

export default LoginForm