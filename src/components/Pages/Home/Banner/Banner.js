import React from 'react';
import './Banner.css'
import banner from '../../../../images/banner.jpg'


const Banner = () => {
    return (
        <div
            className="flex flex-col justify-center items-center"
            style={{
                backgroundImage: `url(${banner})`,
                height: "90vh",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="ml-[-60px] md:ml-[-280px] lg:ml-[-650px]">
                <p className="moto py-4">Welcome from Dr. Jason Armstrong </p>
                <p className="moto-title">Creating vibrant smile</p>
                <p className="moto-title">for healthy lifestyles!</p>
                <p className="moto-normal py-4">
                    Get the most shining teeth in one click.
                </p>
                <button className="action-btn mt-12">GET IN TOUCH TODAY</button>
            </div>
        </div>
    );
};

export default Banner;