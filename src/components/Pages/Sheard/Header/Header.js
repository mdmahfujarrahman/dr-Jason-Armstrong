import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from "../../../../images/logo.png";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Header = () => {
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

    return (
        <nav className="w-full bg-[#EFF4F8]">
            <div className="flex container mx-auto justify-between items-center py-6">
                <img style={{ width: "50px" }} src={logo} alt="" />
                <div
                    onClick={() => setOpen(!open)}
                    className="w-6 h-6 md:hidden"
                >
                    {open ? <XIcon /> : <MenuIcon />}
                </div>
                <div>
                    <div
                        className={`md:flex md:space-x-12 absolute md:static duration-500 ease-in right-20 md:right-0 ${
                            open ? "top-[150px]" : "top-[-150px]"
                        }`}
                    >
                        <CustomLink className="font-bold" to="/">
                            Home
                        </CustomLink>
                        <CustomLink className="font-bold" to="services">
                            Services
                        </CustomLink>
                        <CustomLink className="font-bold" to="/blog">
                            Blogs
                        </CustomLink>
                        <CustomLink className="font-bold" to="/about">
                            About
                        </CustomLink>
                        <CustomLink className="font-bold" to="/login">
                            Log In
                        </CustomLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
