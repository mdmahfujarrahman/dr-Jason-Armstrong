import React from 'react';
import './JasonArmstrong.css'
import jasonArmstrong from '../../../../images/jasonArmstrong.jpg'
import ProgressBar from "@ramonak/react-progress-bar";

const JasonArmstrong = () => {
    <ProgressBar
        completed={89}
        bgColor="#19B6C0"
        height="10px"
        labelAlignment="outside"
        baseBgColor="fff"
        labelColor=""
        customLabel="89%"
    />;
    return (
        <div
            className="flex justify-center items-center flex-col"
            style={{
                backgroundImage: `url(${jasonArmstrong})`,
                height: "600px",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="flex flex-col ml-[10px] md:ml-[-300px] lg:ml-[-650px]">
                <h2 className="name my-4">Dr. Jason Armstrong</h2>
                <p className="sort-des my-4">
                    I am proud to have the opportunity to give you the smile of
                    your dreams
                </p>
                <p className="long-dec my-4">
                    I’m Dr. Jason Armstrong. I grew up in BC where I attended
                    the University of British Columbia <br />
                    for my undergraduate studies in Cell Biology and Genetics.
                    <br />
                    Afterward, I moved to the east coast where I received my
                    Doctor of Dental Surgery degree with <br /> Honours from the
                    University of Toronto.
                </p>
            </div>
            <div className="flex flex-col ml-[-50px] md:ml-[-575px] lg:ml-[-925px]">
                <h3 className="my-4">Orthodontics</h3>
                <div className="w-80">
                    {
                        <ProgressBar
                            completed={95}
                            bgColor="#19B6C0"
                            height="10px"
                            labelColor="#0e0e0e"
                            animateOnRender
                            labelAlignment="outside"
                        />
                    }
                </div>
            </div>
            <div className="flex flex-col ml-[-50px] md:ml-[-584px] lg:ml-[-925px]">
                <h3 className="my-4">Implants</h3>
                <div className="w-80">
                    {
                        <ProgressBar
                            completed={87}
                            bgColor="#19B6C0"
                            height="10px"
                            labelColor="#0e0e0e"
                            animateOnRender
                            labelAlignment="outside"
                        />
                    }
                </div>
            </div>
            <div className="flex flex-col ml-[-50px] md:ml-[-584px] lg:ml-[-925px]">
                <h3 className="my-4">Cosmetic Work</h3>
                <div className="w-80">
                    {
                        <ProgressBar
                            completed={90}
                            bgColor="#19B6C0"
                            height="10px"
                            labelColor="#0e0e0e"
                            animateOnRender
                            labelAlignment="outside"
                        />
                    }
                </div>
            </div>
        </div>
    );
};

export default JasonArmstrong;