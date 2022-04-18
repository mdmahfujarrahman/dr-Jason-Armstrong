import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../images/logo.png";
import loginPhoto from "../../../images/loginpage.png";
<script src="../path/to/flowbite/dist/datepicker.js"></script>;

const MakeAnAppointment = () => {
    return (
        <div className="flex items-center min-h-screen bg-gray-50">
            <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
                <div className="flex flex-col md:flex-row">
                    <div className="h-32 md:h-auto md:w-1/2">
                        <img
                            className="object-cover w-full h-full"
                            src={loginPhoto}
                            alt="img"
                        />
                    </div>
                    <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                        <form className="w-full">
                            <div className="flex justify-center">
                                <img src={logo} alt="" />
                            </div>
                            <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                                Make an Appointment
                            </h1>
                            <div className="mb-4">
                                <label className="block text-sm">Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Name"
                                    className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm">Email</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter Your Email Address"
                                    className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm">Address</label>
                                <input
                                    type="address"
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
                                    required
                                    placeholder="Enter Your Mobile Number"
                                    className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                />
                            </div>

                            <div class="relative">
                                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                     <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                </div>
                                <input datepicker datepicker-format="mm/dd/yyyy" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
                            </div>
                            <button
                                className="pointer block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#19B6C0] border border-transparent rounded-lg hover:bg-[#283E8E] focus:outline-none focus:shadow-outline-blue"
                                type="submit"
                            >
                                Sign Up
                            </button>

                            <hr className="my-8" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        // <div className="my-20">
        //     <div className="container mx-auto">
        //         <div className="mt-5 md:mt-0 md:col-span-2">
        //             <form action="#" method="POST">
        //                 <div className="shadow overflow-hidden sm:rounded-md">
        //                     <div className="px-4 py-5 border-indigo-500 bg-white sm:p-6">
        //                         <div className="grid grid-cols-6 gap-6">
        //                             <div className="col-span-6 sm:col-span-3">
        //                                 <label
        //                                     htmlFor="first-name"
        //                                     className="block text-sm font-medium text-gray-700"
        //                                 >
        //                                     First name
        //                                 </label>
        //                                 <input
        //                                     type="text"
        //                                     name="first-name"
        //                                     id="first-name"
        //                                     autoComplete="given-name"
        //                                     className="mt-1 py-4 px-2  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-indigo-500 rounded-md"
        //                                 />
        //                             </div>

        //                             <div className="col-span-6 sm:col-span-3">
        //                                 <label
        //                                     htmlFor="last-name"
        //                                     className="block text-sm font-medium text-gray-700"
        //                                 >
        //                                     Last name
        //                                 </label>
        //                                 <input
        //                                     type="text"
        //                                     name="last-name"
        //                                     id="last-name"
        //                                     autoComplete="family-name"
        //                                     className="mt-1 py-4 px-2  focus:ring-indigo-500 focus:border-gray-300 block w-full shadow-sm sm:text-sm border border-indigo-500 rounded-md"
        //                                 />
        //                             </div>

        //                             <div className="col-span-6 sm:col-span-4">
        //                                 <label
        //                                     htmlFor="email-address"
        //                                     className="block text-sm font-medium text-gray-700"
        //                                 >
        //                                     Email address
        //                                 </label>
        //                                 <input
        //                                     type="text"
        //                                     name="email-address"
        //                                     id="email-address"
        //                                     autoComplete="email"
        //                                     className="mt-1 py-4 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        //                                 />
        //                             </div>

        //                             <div className="col-span-6 sm:col-span-3">
        //                                 <label
        //                                     htmlFor="country"
        //                                     className="block text-sm font-medium text-gray-700"
        //                                 >
        //                                     Country
        //                                 </label>
        //                                 <select
        //                                     id="country"
        //                                     name="country"
        //                                     autoComplete="country-name"
        //                                     className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        //                                 >
        //                                     <option>Canada</option>
        //                                 </select>
        //                             </div>

        //                             <div className="col-span-6">
        //                                 <label
        //                                     htmlFor="street-address"
        //                                     className="block text-sm font-medium text-gray-700"
        //                                 >
        //                                     Street address
        //                                 </label>
        //                                 <input
        //                                     type="text"
        //                                     name="street-address"
        //                                     id="street-address"
        //                                     autoComplete="street-address"
        //                                     className="mt-1 py-4 px-2 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border border-indigo-700 rounded-md"
        //                                 />
        //                             </div>

        //                             <div className="col-span-6 sm:col-span-6 lg:col-span-2">
        //                                 <label
        //                                     htmlFor="city"
        //                                     className="block text-sm font-medium text-gray-700"
        //                                 >
        //                                     City
        //                                 </label>
        //                                 <input
        //                                     type="text"
        //                                     name="city"
        //                                     id="city"
        //                                     autoComplete="address-level2"
        //                                     className="mt-1 py-4 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        //                                 />
        //                             </div>

        //                             <div className="col-span-6 sm:col-span-3 lg:col-span-2">
        //                                 <label
        //                                     htmlFor="region"
        //                                     className="block text-sm font-medium text-gray-700"
        //                                 >
        //                                     State / Province
        //                                 </label>
        //                                 <input
        //                                     type="text"
        //                                     name="region"
        //                                     id="region"
        //                                     autoComplete="address-level1"
        //                                     className="mt-1 py-4 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        //                                 />
        //                             </div>

        //                             <div className="col-span-6 sm:col-span-3 lg:col-span-2">
        //                                 <label
        //                                     htmlFor="postal-code"
        //                                     className="block text-sm font-medium text-gray-700"
        //                                 >
        //                                     ZIP / Postal code
        //                                 </label>
        //                                 <input
        //                                     type="text"
        //                                     name="postal-code"
        //                                     id="postal-code"
        //                                     autoComplete="postal-code"
        //                                     className="mt-1 py-4 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        //                                 />
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        //                         <button
        //                             type="submit"
        //                             className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        //                         >
        //                             Save
        //                         </button>
        //                     </div>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        // </div>
    );
};

export default MakeAnAppointment;