import React from "react";
import reactLogo from "../images/reactjs-icon.png"


export default function Navbar() {
    return (
        <>
            <nav>
                <img
                    src={reactLogo}
                    alt="React Logo"
                    className="nav-icon"
                />
                <h3 className="nav--logo_text">ReactFacts</h3>
                <h4 className="nav--title">React Course</h4>
            </nav>
        </>
    )
}