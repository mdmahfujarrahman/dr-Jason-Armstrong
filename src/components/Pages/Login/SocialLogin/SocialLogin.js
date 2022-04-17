import React from "react";
import {
    useSignInWithGithub,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../../firebase/firebase.init";
import gitHub from "../../../../images/github.png";
import google from "../../../../images/Google.png";
import { toast, ToastContainer } from "react-toastify";

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
        useSignInWithGoogle(auth);
    const [signInWithGithub, userGitHub, loadingGitHub, errorGitHub] =
        useSignInWithGithub(auth);


    if (loadingGoogle || loadingGitHub) {
        
    }

    if (errorGoogle) {
        toast.error("Pop up close", {
            toastId: "success1",
        });
    }

    if(errorGitHub){
        toast.error("Pop up close", {
            toastId: "success1",
        });
    }
    if (userGoogle || userGitHub) {
        navigate("/");
    }
    return (
        <div className="flex items-center justify-center gap-4">
            <button
                onClick={() => signInWithGithub()}
                className="flex items-center justify-center w-full px-4 py-2 text-sm text-gray-700 text-gray-700 border border-[#19B6C0] rounded-lg hover:border-gray-500 focus:border-gray-500"
            >
                <img className="mr-2" width="30px" src={gitHub} alt="" />
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
            <ToastContainer />
        </div>
    );
};

export default SocialLogin;
