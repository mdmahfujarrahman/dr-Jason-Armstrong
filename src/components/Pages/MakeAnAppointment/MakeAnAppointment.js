import React, { useState } from "react";
import logo from "../../../images/logo.png";
import appinment from "../../../images/appinment.jpg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const MakeAnAppointment = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const navigate = useNavigate();

    const takeAppointment = async (e) => {
        e.preventDefault();
        if (name && email && address && phone && date && time) {
            toast.success(
                `${name} Your appointment has been confirmed at ${time} on the ${date} `,
                {
                    toastId: "success1",
                },
                {
                    position: toast.POSITION.TOP_RIGHT,
                }
            );
        }
        navigate("/");
    };

    return (
        <div className="flex items-center min-h-screen bg-gray-50">
            <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
                <div className="flex flex-col md:flex-row">
                    <div className="h-full md:h-auto md:w-1/2">
                        <img
                            className="object-cover w-full h-full"
                            src={appinment}
                            alt="img"
                        />
                    </div>
                    <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                        <form onSubmit={takeAppointment} className="w-full">
                            <div className="flex justify-center">
                                <img src={logo} alt="" />
                            </div>
                            <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                                Make Your Appointment
                            </h1>
                            <div className="mb-4">
                                <label className="block text-sm">Name</label>
                                <input
                                    type="text"
                                    onBlur={(e) => setName(e.target.value)}
                                    required
                                    placeholder="Enter Your Name"
                                    className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm">Email</label>
                                <input
                                    type="email"
                                    onBlur={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Enter Your Email Address"
                                    className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm">Address</label>
                                <input
                                    type="address"
                                    onBlur={(e) => setAddress(e.target.value)}
                                    required
                                    placeholder="Enter Your Address"
                                    className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm">
                                    Phone Number
                                </label>
                                <input
                                    type="number"
                                    onBlur={(e) => setPhone(e.target.value)}
                                    required
                                    placeholder="Enter Your Mobile Number"
                                    className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm">
                                    Select Appointment Date
                                </label>
                                <input
                                    type="date"
                                    onBlur={(e) => setDate(e.target.value)}
                                    required
                                    placeholder="Enter Your Mobile Number"
                                    className="w-full px-4 py-2 text-sm border rounded-md focus:border-[#19B6C0] focus:outline-none focus:ring-1 focus:ring-[#19B6C0]"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm">
                                    Select Appointment Time
                                </label>
                                <input
                                    type="time"
                                    onBlur={(e) => setTime(e.target.value)}
                                    required
                                    placeholder="Enter Your Mobile Number"
                                    className="w-full px-4 py-2 text-sm border rounded-md focus:border-[#19B6C0] focus:outline-none focus:ring-1 focus:ring-[#19B6C0]"
                                />
                            </div>
                            <button
                                className="pointer block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#19B6C0] border border-transparent rounded-lg hover:bg-[#283E8E] focus:outline-none focus:shadow-outline-blue"
                                type="submit"
                            >
                                Confirm
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAnAppointment;
