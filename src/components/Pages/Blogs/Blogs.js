import React from "react";
import authtentication from "../../../images/authtentication.jpg";
import firebase from "../../../images/firebase.png";
import firebaseServices from "../../../images/interface.png";


const Blogs = () => {
    return (
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/3">
                    <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                        <img
                            className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                            src={authtentication}
                            alt="authtentication"
                        />
                        <div className="p-6">
                            <h1 className="title-font font-bold text-lg text-gray-600 mb-3">
                                Difference between <code>authentication</code>{" "}
                                <br />
                                and <code>authorization</code>
                            </h1>
                            <p className="leading-relaxed mb-3">
                                Authentication is the process of determining the
                                identity of a user, where the identity is
                                verified. Users can partially change the
                                authentication details as needed. Login details,
                                usernames, passwords, OTPs required. <br />
                                <br />
                                Authorization is the process of granting access.
                                User cannot change authorization permissions
                                because it is granted to a user by the system
                                owner / administrator and only has the power to
                                change it.
                            </p>
                            <div className="flex items-center flex-wrap "></div>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
                        <img
                            className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                            src={firebase}
                            alt="firebase"
                        />
                        <div className="p-6">
                            <h1 className="title-font font-bold text-lg text-gray-600 mb-3">
                                Why are you using <code>firebase</code>? What
                                other options do you have to implement
                                authentication?
                            </h1>
                            <p className="leading-relaxed mb-3">
                                We use Firebase for authentication, storage,
                                hosting, secure access to the database directly
                                from client-side.
                                <br />
                                <br />
                                <br />
                                Alternatively we can use - <code>Okta</code>,
                                <br />
                                <code>Frontegg</code>,<br />
                                <code>Authress</code>,<br />
                                <code>Auth0</code>, <br />
                                <code>Amazon Cognito</code>,<br />
                                <code>STYTCH</code>,<br /> <code>IBM</code>,
                                <br />
                                <code>OneLogin</code>.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                        <img
                            className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                            src={firebaseServices}
                            alt="interface"
                        />
                        <div className="p-6">
                            <h1 className="title-font text-lg font-bold text-gray-600 mb-3">
                                What other services does <code>firebase</code>{" "}
                                provide other than authentication?
                            </h1>
                            <p className="leading-relaxed mb-3">
                                We can easily host web apps on Firebase. Lets
                                quickly host your web app with a few commands.
                                <br />
                                <br />
                                Deploy machine learning project with Firebase ML
                                along with your app.
                                <br />
                                <br />
                                Google Firebase uses a dedicated cloud-based
                                NoSQL database, Firestore, and a real-time
                                database.
                                <br />
                                <br />
                                Firebase's built-in push notifications allow you
                                to personalize your app without having to write
                                a separate script from scratch.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
