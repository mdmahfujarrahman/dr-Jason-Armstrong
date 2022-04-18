import React from 'react';
import './TakeCare.css'
import takecare from '../../../../images/take-care.png'
import { ChevronRightIcon } from "@heroicons/react/solid";

const TakeCare = () => {
    return (
        <div className="bg-[#F0F4F5] flex flex-wrap justify-around items-center pt-20 px-4 md:px-0">
            <img src={takecare} alt="" />
            <div>
                <h2 className="take-care-title mb-4">
                    Take Care of Your Teeth <br /> Wisely
                </h2>
                <p className="take-care-des mb-4">
                    To help you keeping your smile as white as dimond,
                    <br /> here is a simple guide from our team of dentists.
                </p>

                <p className="flex mb-4">
                    <ChevronRightIcon width="20px" color="#19B6C0" />
                    <span>Clean your teeth twice a day.</span>
                </p>
                <p className="flex mb-4">
                    <ChevronRightIcon width="20px" color="#19B6C0" />
                    <span>Avoid sugar-rich food products.</span>
                </p>
                <p className="flex mb-4">
                    <ChevronRightIcon width="20px" color="#19B6C0" />
                    <span>Do not smoke. Eat fruits and vegetables.</span>
                </p>
                <p className="flex mb-4">
                    <ChevronRightIcon width="20px" color="#19B6C0" />
                    <span>Use dental floss regularly.</span>
                </p>
                <p className="flex mb-4">
                    <ChevronRightIcon width="20px" color="#19B6C0" />
                    <span>Visit your dentist at least once half a year.</span>
                </p>
                <p className="flex">
                    <ChevronRightIcon width="20px" color="#19B6C0" />
                    <span>Smile more.</span>
                </p>
                <button className="appointment-btn my-8">Learn More</button>
            </div>
        </div>
    );
};

export default TakeCare;