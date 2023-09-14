import React from 'react'
import image_1 from '../images/side-image.jpg'
import { GiLoveInjection } from 'react-icons/gi';
import { BsCalendar2Date } from 'react-icons/bs';
import { PiSmileyLight } from 'react-icons/pi';
import { AiOutlineSmallDash } from 'react-icons/ai';


const AboutSer = () => {
  return (
    <>
        <section className="about-services">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-xl-7 service-boxsss">
                        <h6>WELCOME TO OUR HEALTHCARE:</h6>
                        <div className="service-box">
                            <div className=" d-flex">
                                <div className="icon">
                                    <i className="fas fa-hospital-alt"></i>
                                </div>
                                <div className="det">
                                    <b>Newest Technologies.</b>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="service-box">
                            <div className=" d-flex">
                                <div className="icon">
                                    <i className="fas fa-user-md"></i>
                                </div>
                                <div className="det">
                                    <b>Newest Technologies.</b>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae quibusdam et quo?.</p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="service-box">
                            <div className=" d-flex">
                                <div className="icon">
                                    <i className="fas fa-briefcase-medical"></i>
                                </div>
                                <div className="det">
                                    <b>Newest Technologies.</b>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae quibusdam et quo?.</p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-12 col-md-4">
                                <div className="about-desc d-flex">
                                    <div className="">
                                    <GiLoveInjection/>
                                    <AiOutlineSmallDash/>
                                    </div>
                                    <div className="">
                                        <h3>1000</h3>
                                        <p>PERFORMED<br/> TREATMENTS</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="about-desc d-flex">
                                    <div className="">
                                    <PiSmileyLight/>
                                    <AiOutlineSmallDash/>
                                    </div>
                                    
                                    <div className="">
                                        <h3>200</h3>
                                        <p>HAPPY<br/> PATIENTS</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="about-desc d-flex">
                                    <div className="">
                                    <BsCalendar2Date/>
                                    <AiOutlineSmallDash/>
                                    </div>
                                    
                                    <div className="">
                                        <h3>24</h3>
                                        <p>YEAR OF <br/> EXPERIENCED</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-5">
                        <div className="imagr-box">
                            <img src={image_1} className=' img-fluid' alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default AboutSer