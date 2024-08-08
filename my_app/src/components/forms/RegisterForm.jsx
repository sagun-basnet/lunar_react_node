import axios from 'axios';
import React, { useState } from 'react'

const RegisterForm = () => {
    let initialFormData = {
        name: "",
        address: "",
        email: "",
        password: ""
    }
    const [form, setForm] = useState(initialFormData);

    const a = 12;
    const b = 13;

    const res = a + b;
    const res1 = a - b;


    // console.log(form);
    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post('http://localhost:5500/post', form).then((res) => {
            console.log(res);
            setForm(initialFormData);
        }).catch((ex) => {
            console.log(ex);
        });

        // console.log(form);
    }

    return (
        <div className='grid place-items-center h-[100vh]'>
            <div className="w-[50%] h-[60%] shadow-black shadow-xl grid place-items-center">
                <form onSubmit={handleSubmit} className=' w-[80%] flex flex-col justify-center items-center p-8 gap-4'>
                    <h1 className='text-4xl font-bold text-center'>Register</h1>
                    <input className='w-full p-2 border-b-2 border-black' type="text" name="name" id="" placeholder='Enter name' onChange={(e) => setForm({ ...form, name: e.target.value })} value={form.name} />

                    <input className='w-full p-2 border-b-2 border-black' type="text" name="address" id="" placeholder='Enter Address' onChange={(e) => setForm({ ...form, address: e.target.value })} value={form.address} />

                    <input className='w-full p-2 border-b-2 border-black' type="email" name="email" id="" placeholder='Enter email' onChange={(e) => setForm({ ...form, email: e.target.value })} value={form.email} />

                    <input className='w-full p-2 border-b-2 border-black' type="password" name="password" id="" placeholder='Enter password' onChange={(e) => setForm({ ...form, password: e.target.value })} value={form.password} />

                    <button type='submit' className='p-2 px-4 bg-orange-500 rounded-md'>Submit</button>
                </form>
            </div>

        </div>
    )
}

export default RegisterForm