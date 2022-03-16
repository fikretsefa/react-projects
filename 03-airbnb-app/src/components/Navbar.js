import React from "react";
import icon from "../images/Vector.png"


export default function Navbar() {
    return (
        <>
            <nav>
                <img
                    src={icon}
                    alt="React Logo"
                    className="nav--logo"
                />
            </nav>
        </>
    )
}