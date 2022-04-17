import React from "react";
import './Services.css'
import Whitening from "../../../../images/services/Complete Whitening.jpg";
import Cleaning from "../../../../images/services/Air Flow Cleaning.jpg";
import Child from "../../../../images/services/Childs.jpg";
import Service from "../Service/Service";

const services = [
    {
        id: 1,
        name: "Complete Whitening",
        description:
            "Go through the range of procedures to get your smile shining.",
        img: Whitening,
        price: 99,
    },
    {
        id: 2,
        name: "Air Flow Cleaning",
        description: "Let us clean your mouth with air   and repair a few teeth.",
        img: Cleaning,
        price: 199,
    },
    {
        id: 3,
        name: "Child’s First Dental Visit",
        description:
            "I as a dentist the most  friendly  human being in the entire world.",
        img: Child,
        price: 150,
    },
];

const Services = () => {
    return (
        <div
            id="services"
            className="bg-[#F0F4F5] flex flex-col justify-center items-center py-20"
        >
            <div className="text-center my-10">
                <h2 className="text-2xl services-title">My Services</h2>
                <p className="services-subtitle">
                    Begin and end your day with a smile!
                </p>
            </div>
            <div className="flex flex-wrap  md:flex-nowrap justify-center items-center">
                {services.map((service) => (
                    <Service key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default Services;
