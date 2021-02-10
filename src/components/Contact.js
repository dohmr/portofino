import React, { useState } from 'react';
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contact = () => {
        const [successMessage, setSuccessMessage] = useState("");
        const { register, handleSubmit, errors } = useForm();
    
        const serviceID = "service_ID";
        const templateID = "template_portfolio";
        const userID = "user_DxPhLCgGhFBdY2uQFQWfn";
    
        const onSubmit = (data, reset) => {
            sendEmail(
                serviceID,
                templateID,
                {
                    name: data.name,
                    phone: data.phone,
                    email: data.email,
                    subject: data.subject,
                    description: data.description
    
                },
                userID
            )
            reset.target.reset();
    
        }
    
        const sendEmail = (serviceID, templateID, variables, userID) => {
    
            emailjs.send(serviceID, templateID, variables, userID)
                .then(() => {
                    setSuccessMessage("Form Submitted. Thank you for your inquiry! I'll contact you soon.");
                }).catch(err => console.error(`Error ${err}`));
        }
    
        return (
            <div id="contact" className="contacts">
                <div className="text-center">
                    <h1>contact me</h1>
                    <p>Please fill out the following form with Project inquiries</p>
                    <span className="success-message">{successMessage}</span>
                </div>
                <div className="container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-6 col-xs-12">
                                {/*/name input/*/}
                                <input
                                    id="name"
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    ref={
                                        register({
                                            required: "Please Enter a Name for Contact",
                                            maxLength: {
                                                value: 20,
                                                message: "Enter Name, between 1 - 20 Characters"
                                            }
                                        })
                                    }
                                />
                                <div className="line"></div>
                                <span className="error-message">
                                    {errors.name && errors.name.message}
                                </span>
                                {/*/phone input/*/}
                                <input
                                    id="phone"
                                    type="text"
                                    className="form-control"
                                    placeholder="Phone Number"
                                    name="phone"
                                    ref={
                                        register({
                                            required: "Please add a Phone number in order to reach you.",
    
                                        })
                                    }
                                />
                                <div className="line"></div>
                                <span className="error-message">
                                    {errors.phone && errors.phone.message}
                                </span>
                                {/*/email input/*/}
                                <input
                                    id="email"
                                    type="email"
                                    className="form-control"
                                    placeholder="E-Mail"
                                    name="email"
                                    ref={
                                        register({
                                            required: "Please Enter your preferred return Email address.",
                                            pattern: {
                                                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                                message: "Invalid Email format."
                                            }
                                        })
                                    }
                                />
                                <div className="line"></div>
                                <span className="error-message">
                                    {errors.email && errors.email.message}
                                </span>
                                {/*/subject input/*/}
                                <input
                                    id="subject"
                                    type="text"
                                    className="form-control"
                                    placeholder="Type of Project"
                                    name="subject"
                                    ref={
                                        register({
                                            required: "Please Enter the type of Project.",
                                            maxLength: {
                                                value: 20,
                                                message: "Enter Project Type, between 1 - 20 Characters"
                                            }
                                        })
                                    }
                                />
                                <div className="line"></div>
                                <span className="error-message">
                                    {errors.subject && errors.subject.message}
                                </span>
                            </div>
                            <div className="col-md-6 col-xs-12">
                                <textarea
                                    id="description"
                                    type="text"
                                    className="form-control"
                                    placeholder="Project Details"
                                    name="description"
                                    ref={
                                        register({
                                            required: "Please add a Description of the work you are in need of.",
                                            minLength: {
                                                value: 5,
                                                message: "Short description of at least 3 words, please!"
                                            }
                                        })
                                    }
                                ></textarea>
                                <div className="line"></div>
                                <span className="error-message">
                                    {errors.description && errors.description.message}
                                </span>
                                <button className="btn-main-offer contact-btn" type="submit">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
    )
}

export default Contact
