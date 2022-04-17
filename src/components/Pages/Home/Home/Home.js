import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Specialities from '../Specialities/Specialities';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Specialities/>
            <Services/>
        </div>
    );
};

export default Home;