import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const {name, price, img, description} = service;
    return (
        <div className="mx-4 text-center rounded">
            <img
                className="object-cover object-center scale-100 transition-all duration-400 hover:scale-105"
                src={img}
                alt=""
            />
            <div className="bg-slate-50 p-8">
                <p className="text-xl my-4">{name}</p>
                <p className="text-wrap my-2">{description.slice(0, 34)}</p>
                <p className="text-wrap my-2">{description.slice(35)}</p>
                <p className="my-4 font-bold text-[#19B6C0] text-2xl">
                    $ {price}
                </p>
                <div>
                    <Link
                        to="/make-an-appointment"
                        className="appointment-btn my-4"
                    >
                        Make An Appointment
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Service;