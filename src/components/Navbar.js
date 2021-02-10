import React from 'react';
// import logo from "../logo2.png";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
            <div className="container">

                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#"><img src={logo} alt="logo..."/>   </a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link smooth={true} to="home" offset={-10} className="nav-link" aria-current="page" href="#">Home</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link smooth={true} to="about" offset={-50} className="nav-link" href="#">About Me</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link smooth={true} to="services" offset={-50} className="nav-link" href="#">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link smooth={true} to="exp" offset={-50} className="nav-link" href="#">EXP</Link>
                            </li>
                            <li className="nav-item">
                                <Link smooth={true} to="portfolio" offset={-10} className="nav-link" href="#">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link smooth={true} to="contact" offset={-50} className="nav-link" href="#">Contact</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar


