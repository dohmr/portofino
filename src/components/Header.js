import React from 'react';
import Type from "react-typed";
import { Link } from "react-scroll";


const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>Under Construction!</h1>
                <Type 
                    className="type-text"
                    strings={["WEB DESIGN", "GRAPHIC DESIGN", "FRONT END", "BACK END", "FULL-STACK"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Link smooth={true} to="contact" offset={-50} className="nav-link" href="#"><a href="#" className="btn-main-offer">Contact Me</a></Link>

            </div>

        </div>
    )
}

export default Header
