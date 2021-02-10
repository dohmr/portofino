import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faBrush, faCode, faMusic } from '@fortawesome/free-solid-svg-icons';


const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5">My Services </h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle" ><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
                            <h3>Front End</h3>
                            <p>Bootstrap & React</p>
                            <p>JavaScript</p>
                            <p>Client friendly UI</p>

                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle" ><FontAwesomeIcon className="icon" icon={faCode} size="2x" /></div>
                            <h3>Back End</h3>
                            <p>API implementation</p>
                            <p>DATA storage</p>
                            <p>Client friendly UX</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle" ><FontAwesomeIcon className="icon" icon={faBrush} size="2x" /></div>
                            <h3>Graphic Design</h3>
                            <p>Vector Art</p>
                            <p>Logo design</p>
                            <p>Illustration</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle" ><FontAwesomeIcon className="icon" icon={faMusic} size="2x" /></div>
                            <h3>Folk Singer</h3>
                            <p>I'll Write you a song.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services
