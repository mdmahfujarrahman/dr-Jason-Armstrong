import React from 'react';

const Specialitiey = ({ speciality }) => {
    const {name, img, description} = speciality;
    return (
        <div className="text-center my-4 px-4">
            <img className="mx-auto mb-6" src={img} alt="" />
            <p className="text-2xl text-[#282434] mb-6">{name}</p>
            <p className="text-[#8595a0]">{description}</p>
        </div>
    );
};

export default Specialitiey;