import React, { useRef } from "react";
import loginPhoto from "../../../../images/loginpage.png"
import logo from "../../../../images/logo.png"
import gitHub from "../../../../images/github.png"
import google from "../../../../images/Google.png"
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../../firebase/firebase.init";



const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();


    const handleSignIn = e =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    
    }

    if(user){
        navigate("/blogs");
    }



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
                        <form onSubmit={handleSignIn} className="w-full">
                            <div className="flex justify-center">
                                <img src={logo} alt="" />
                            </div>
                            <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                                Login to Your Account
                            </h1>
                            <div>
                                <label className="block text-sm">Email</label>
                                <input
                                    type="email"
                                    ref={emailRef}
                                    className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    placeholder="Enter Your Email"
                                />
                            </div>
                            <div>
                                <label className="block mt-4 text-sm">
                                    Password
                                </label>
                                <input
                                    className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    placeholder="Enter Your Password"
                                    ref={passwordRef}
                                    type="password"
                                />
                            </div>
                            <p className="mt-4 flex justify-between">
                                <button className="text-sm text-blue-600 hover:underline">
                                    Forgot your password?
                                </button>
                                <Link
                                    className="ml-2 text-sm text-blue-600 hover:underline"
                                    to="/signup"
                                >
                                    Create New Account
                                </Link>
                            </p>
                            {error}
                            <button
                                className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#19B6C0] border border-transparent rounded-lg active:bg-blue-600 hover:bg-[#283E8E] focus:outline-none focus:shadow-outline-blue"
                                type='submit'
                            >
                                Log in
                            </button>

                            <hr className="my-8" />

                            <div className="flex items-center justify-center gap-4">
                                <button className="flex items-center justify-center w-full px-4 py-2 text-sm text-gray-700 text-gray-700 border border-[#19B6C0] rounded-lg hover:border-gray-500 focus:border-gray-500">
                                    <img
                                        className="mr-2"
                                        width="30px"
                                        src={gitHub}
                                        alt=""
                                    />
                                    Github
                                </button>
                                <button className="flex items-center justify-center w-full px-4 py-2 text-sm text-gray-700 text-gray-700 border border-[#19B6C0] rounded-lg hover:border-gray-500 focus:border-gray-500">
                                    <img
                                        className="mr-2"
                                        width="30px"
                                        src={google}
                                        alt=""
                                    />
                                    Google
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
