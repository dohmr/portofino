import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinIcon,
    LinkedinShareButton,
    // InstapaperIcon,
    // InstapaperShareButton
} from "react-share";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Shawn Yandall © </p><br />

                        </div>
                        <div className="d-flex">

                            <p>Fredericksburg Cty. VIRGINIA</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:+6193151705">+(619)315-1705</a>
                            {/* <p></p> */}
                        </div>
                        <div className="d-flex">
                            <a href={"mailto:" + "Shawn.Yandall@gmail.com"}>Shawn.Yandall@gmail.com</a>

                        </div>
                    </div>
                    <br></br>
                    <div className="col-lg-3 col-md-2 col-sm-2">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav"><Link smooth={true} to="home" offset={-10} className="nav-link" aria-current="page" href="#">Home</Link></a>
                                <a className="footer-nav"><Link smooth={true} to="services" offset={-50} className="nav-link" href="#">Services</Link></a>
                            </div>
                            <div className="col">
                                <a className="footer-nav"><Link smooth={true} to="exp" offset={-50} className="nav-link" href="#">Experience</Link></a>
                                <a className="footer-nav"><Link smooth={true} to="portfolio" offset={-10} className="nav-link" href="#">Portfolio</Link></a>
                                <a className="footer-nav"><Link smooth={true} to="contact" offset={-50} className="nav-link" href="#">Contact</Link></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"this website"}
                                quote={"Great work !"}
                                hashtag={"#handyGuy"}
                            >
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>
                            <LinkedinShareButton
                                url={"this website"}
                                quote={"Great work !"}
                                hashtag={"#handyGuy"}
                            >
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
