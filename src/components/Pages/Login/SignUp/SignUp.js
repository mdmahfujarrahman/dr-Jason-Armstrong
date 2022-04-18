import React, { useRef, useState } from "react";
import loginPhoto from "../../../../images/loginpage.jpg";
import logo from "../../../../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithGithub,
    useSignInWithGoogle,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../../firebase/firebase.init";
import { async } from "@firebase/util";
import gitHub from "../../../../images/github.png";
import google from "../../../../images/Google.png";
import { toast, ToastContainer } from "react-toastify";

const SignUp = () => {
    const nameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });
    const [updateProfile] = useUpdateProfile(auth);
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
        useSignInWithGoogle(auth);
    const [signInWithGithub, userGitHub, loadingGitHub, errorGitHub] =
        useSignInWithGithub(auth);

    let errorElement;
    const handleRegister = async (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if (password.length < 6) {
            toast.error("Please enter minimum 6 Character as a password", {
                toastId: "success1",
            });
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    };

    if (error) {
        if (error?.message === `Firebase: Error (auth/email-already-in-use).`) {
            errorElement = (
                <span className="text-red-600">
                    Email already in use by another user
                </span>
            );
        }
    }
    if (errorGoogle || errorGitHub) {
        errorElement = (
            <span className="text-red-600">
                {errorGoogle?.message || errorGitHub?.message
                    ? errorGoogle?.message || errorGitHub?.message
                    : ""}
            </span>
        );
    }

    if (user || userGitHub || userGoogle) {
        navigate("/");
    }
    return (
        <div className="flex items-center min-h-screen bg-gray-50">
            <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
                <div className="flex flex-col md:flex-row">
                    <div className="h-full md:h-auto md:w-1/2">
                        <img
                            className="object-cover w-full h-full"
                            src={loginPhoto}
                            alt="img"
                        />
                    </div>
                    <ToastContainer />
                    <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                        <form onSubmit={handleRegister} className="w-full">
                            <div className="flex justify-center">
                                <img src={logo} alt="" />
                            </div>
                            <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                                Create Your Account
                            </h1>
                            <div className="mb-4">
                                <label className="block text-sm">Name</label>
                                <input
                                    type="text"
                                    ref={nameRef}
                                    placeholder="Enter Your Name"
                                    className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                />
                            </div>
                            <div>
                                <label className="block text-sm">Email</label>
                                <input
                                    type="email"
                                    ref={emailRef}
                                    required
                                    placeholder="Enter Your Email Address"
                                    className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                />
                            </div>

                            <div>
                                <label className="block mt-4 text-sm">
                                    Password
                                </label>
                                <input
                                    ref={passwordRef}
                                    type="password"
                                    required
                                    placeholder="Enter Your Password"
                                    className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                />
                            </div>
                            <p className="my-2 text-red-500">{errorElement}</p>
                            <p className="mt-4 flex items-center">
                                <span>Already have a Account?</span>
                                <Link
                                    to="/login"
                                    className="ml-2 text-sm text-blue-600 hover:underline"
                                >
                                    Log in
                                </Link>
                            </p>
                            <p className="flex items-center">
                                <input
                                    onClick={() => setAgree(!agree)}
                                    className="mt-4 mr-4"
                                    type="checkbox"
                                />
                                <span
                                    className={`block mt-4 text-sm ${
                                        agree ? " " : "text-red-600"
                                    }`}
                                >
                                    I Accept All The Terms and Conditions.
                                </span>
                            </p>
                            <button
                                disabled={!agree}
                                className="pointer block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#19B6C0] border border-transparent rounded-lg hover:bg-[#283E8E] focus:outline-none focus:shadow-outline-blue"
                                type="submit"
                            >
                                Sign Up
                            </button>

                            <hr className="my-8" />
                            <div className="flex items-center justify-center gap-4">
                                <button
                                    onClick={() => signInWithGithub()}
                                    className="flex items-center justify-center w-full px-4 py-2 text-sm text-gray-700 text-gray-700 border border-[#19B6C0] rounded-lg hover:border-gray-500 focus:border-gray-500"
                                >
                                    <img
                                        className="mr-2"
                                        width="30px"
                                        src={gitHub}
                                    />
                                    Github
                                </button>
                                <button
                                    onClick={() => signInWithGoogle()}
                                    className="flex items-center justify-center w-full px-4 py-2 text-sm text-gray-700 text-gray-700 border border-[#19B6C0] rounded-lg hover:border-gray-500 focus:border-gray-500"
                                >
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

export default SignUp;
