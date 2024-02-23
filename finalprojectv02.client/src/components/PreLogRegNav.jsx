import { Link } from "react-router-dom";
import { useState } from "react";

const PreLogRegNav = ({ setColor }) => {
    const changeTheme = (color) => {
        setColor(color);
    };

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to={"/"} className="btn btn-ghost text-xl">
                    RAE.
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to={"/services"}>Our Services</Link>
                    </li>
                    <li>
                        <Link to={"/register/login/user"}>Register or login as employee</Link>
                    </li>
                    <li>
                        <Link to={"/register/login/company"}>Register or login as company</Link>
                    </li>
                    <li>
                        <details>
                            <summary>Choose theme</summary>
                            <ul  style={{ maxHeight: '200px', overflowY: 'auto' }} className="p-2 bg-base-100 rounded-t-none">
                                <li onClick={() => changeTheme("dark")}>dark </li>
                                <li onClick={() => changeTheme("light")}>light </li>
                                <li onClick={() => changeTheme("cupcake")}>cupcake</li>
                                <li onClick={() => changeTheme("bumblebee")}>bumblebee</li>
                                <li onClick={() => changeTheme("emerald")}>emerald</li>
                                <li onClick={() => changeTheme("corporate")}>corporate</li>
                                <li onClick={() => changeTheme("synthwave")}>synthwave</li>
                                <li onClick={() => changeTheme("retro")}>retro</li>
                                <li onClick={() => changeTheme("cyberpunk")}>cyberpunk</li>
                                <li onClick={() => changeTheme("valentine")}>valentine</li>
                                <li onClick={() => changeTheme("haloween")}>haloween</li>
                                <li onClick={() => changeTheme("garden")}>garden</li>
                                <li onClick={() => changeTheme("forest")}>forest</li>
                                <li onClick={() => changeTheme("aqua")}>aqua</li>
                                <li onClick={() => changeTheme("lofi")}>lofi</li>
                                <li onClick={() => changeTheme("pastel")}>pastel</li>
                                <li onClick={() => changeTheme("fatnasy")}>fantasy</li>
                                <li onClick={() => changeTheme("wireframe")}>wireframe</li>
                                <li onClick={() => changeTheme("black")}>black</li>
                                <li onClick={() => changeTheme("luxury")}>luxury</li>
                                <li onClick={() => changeTheme("dracula")}>dracula</li>
                                <li onClick={() => changeTheme("cmyk")}>cmyk</li>
                                <li onClick={() => changeTheme("autumn")}>autumn</li>
                                <li onClick={() => changeTheme("buisness")}>buisness</li>
                                <li onClick={() => changeTheme("acid")}>acid</li>
                                <li onClick={() => changeTheme("lemonade")}>lemonade</li>
                                <li onClick={() => changeTheme("night")}>night</li>
                                <li onClick={() => changeTheme("coffee")}>coffee</li>
                                <li onClick={() => changeTheme("winter")}>winter</li>
                                <li onClick={() => changeTheme("dim")}>dim</li>
                                <li onClick={() => changeTheme("nord")}>nord</li>
                                <li onClick={() => changeTheme("sunset")}>sunset</li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PreLogRegNav;