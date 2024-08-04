import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ApiFatch = () => {
    const [data, setData] = useState([]);


    const handleApi = async () => {

        await axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            // console.log(res.data);
            setData(res.data);
            // console.log(data);

        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        handleApi();
    }, []);


    return (
        <div className='gap-2 p-6 border-2 border-black grid grid-cols-4 place-items-center'>
            {data.map((value, index) => (
                <div key={index} className="p-8 flex flex-col justify-center items-center gap-4 rounded-md bg-slate-500 text-black h-[32rem]">
                    <span className='text-2xl'>Id: {value.id}</span>
                    <h1 className='text-4xl'>Title: {value.title}</h1>
                    <p className='text-xl'>Body: {value.body}</p>
                </div>
            ))}
        </div>
    )
}

export default ApiFatch