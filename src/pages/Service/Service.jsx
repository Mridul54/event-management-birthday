import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []) 

    return (
        <div className='max-w-6xl mx-auto'>
            <h1 className='text-6xl text-center font-bold my-7'>Our Service</h1>
            <div className='grid grid-cols-2 gap-5'>
                {
                    services.map((service, id) => (
                        <div key={id} className="card w-50%  bg-base-100 shadow-xl image-full">
                            <figure><img className='w-full' src={service.img} alt="Shoes" /></figure>
                            <div className="card-body items-center ">
                                <h2 className="card-title text-5xl mt-10 mb-5">{service.name}</h2>
                                <p className='text-2xl'>{service.short_description}</p>
                                <div className="card-actions gap-60">
                                    <p className='text-3xl'>${service.price}</p>
                                    <Link to={`/details/${id}`}>
                                    <button className="btn btn-primary text-xl ">{service.button}</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Service;

