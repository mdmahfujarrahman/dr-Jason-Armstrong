import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from "../../../../images/logo.png";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase/firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
    const [user] = useAuthState(auth);
    const [open, setOpen] = useState(false);

    function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });

        return (
            <div>
                <Link
                    style={{ color: match ? "skyblue" : "gray" }}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
            </div>
        );
    }

    const logout = () =>{
        signOut(auth);
    }

    return (
        <nav className="w-full bg-[#EFF4F8]">
            <div className="flex container mx-auto justify-around md:justify-between items-center py-6">
                <CustomLink to="/">
                    <img style={{ width: "50px" }} src={logo} alt="" />
                </CustomLink>
                <div
                    onClick={() => setOpen(!open)}
                    className="ml-40 w-6 h-6 md:hidden"
                >
                    {open ? <XIcon /> : <MenuIcon />}
                </div>
                <div>
                    <div
                        className={`md:flex md:space-x-12 absolute md:static duration-500 ease-in right-20 md:right-0 ${
                            open ? "top-[80px]" : "top-[-150px]"
                        }`}
                    >
                        <CustomLink className="font-bold" to="/">
                            Home
                        </CustomLink>
                        <CustomLink className="font-bold" to="/blogs">
                            Blogs
                        </CustomLink>
                        <CustomLink className="font-bold" to="/about">
                            About
                        </CustomLink>

                        {user ? (
                            <button onClick={logout} className="font-bold">
                                Log out
                            </button>
                        ) : (
                            <CustomLink className="font-bold" to="/login">
                                Log In
                            </CustomLink>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
