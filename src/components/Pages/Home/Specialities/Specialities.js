import React from 'react';
import Specialitiey from '../Specialitiey/Specialitiey';
import './Specialities.css'
import Specialitie1 from '../../../../images/Specialities/specialitie1.png'
import Specialitie2 from '../../../../images/Specialities/specialitie2.png'
import Specialitie3 from '../../../../images/Specialities/specialitie3.png'
import Specialitie4 from '../../../../images/Specialities/specialitie4.png'

const specialities = [
    {
        id: 1,
        name: "Teeth Whitening",
        description:
            "Whitening is among the most popular dental procedures because it can greatly improve how your teeth look.",
        img:  Specialitie1 ,
    },
    {
        id: 2,
        name: "Teeth Cleaning",
        description:
            "Teeth cleaning is part of oral hygiene and involves the removal of dental plaque from teeth (dental caries).",
        img:  Specialitie2 ,
    },
    {
        id: 3,
        name: "Modern Anesthetic",
        description:
            "Dental anesthesia is a field of anesthesia that includes not only local but sedation and general anesthesia.",
        img:  Specialitie3 ,
    },
    {
        id: 4,
        name: "Quality Brackets",
        description:
            "Orthodontics is the branch of dentistry that corrects teeth and jaws that are positioned.",
        img:  Specialitie4 ,
    },
];

const Specialities = () => {
    return (
        <div
            className="flex items-center flex-col my-10"
            
        >
            <h2 className="specialities-title my-8">My Specialities</h2>
            <div className="flex flex-wrap  md:flex-nowrap container mx-auto my-auto">
                {specialities.map((speciality) => (
                    <Specialitiey key={speciality.id} speciality={speciality} />
                ))}
            </div>
        </div>
    );
};

export default Specialities;