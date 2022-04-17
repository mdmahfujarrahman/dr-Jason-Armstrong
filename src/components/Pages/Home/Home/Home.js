import React from 'react';
import Banner from '../Banner/Banner';
import JasonArmstrong from '../JasonArmstrong/JasonArmstrong';
import Services from '../Services/Services';
import Specialities from '../Specialities/Specialities';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Specialities/>
            <Services/>
            <JasonArmstrong/>
        </div>
    );
};

export default Home;