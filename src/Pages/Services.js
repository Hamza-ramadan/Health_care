import React from 'react'
import { FaTooth } from 'react-icons/fa6';
import { GiAnatomy } from 'react-icons/gi';
import { BiInjection } from 'react-icons/bi';
import { GiHeartOrgan  } from 'react-icons/gi';
import { BsFillEarFill } from 'react-icons/bs';
import { GiNoseFront } from 'react-icons/gi';
import { MdOutlineBloodtype } from 'react-icons/md';
import { GiLiver } from 'react-icons/gi';
import { GiKidneys } from 'react-icons/gi';
import ImagContent from '../components/ImagContent'
import ServviceBox from '../components/ServviceBox'
import SectionTow from '../components/SectionTow'
import { Link } from 'react-router-dom';
import des_img from "../images/serv/department_man.png"
import atrology_img from "../images/serv/blog3.png"
import profile_img from "../images/serv/gallery2.png"
import { MdArrowForwardIos } from 'react-icons/md';

const Services = () => {
  return (
    <>
    <ImagContent mainTitle={"Services"} title={"Services"}/>
    <div className="servvices-boxs">
        <div className="container">
            <div className="row justify-content-center">
                    <ServviceBox image={<FaTooth/>} text={"Tooth Protection"}/>
                    <ServviceBox image={<BiInjection/>} text={"Anesthesia"}/>
                    <ServviceBox image={<GiAnatomy/>} text={"Anatomy"}/>
                    <ServviceBox image={<GiHeartOrgan/>} text={"Cardiology"}/>
                    <ServviceBox image={<BsFillEarFill/>} text={"Ear"}/>
                    <ServviceBox image={<GiNoseFront/>} text={"Nose"}/>
                    <ServviceBox image={<MdOutlineBloodtype/>} text={"Hematology"}/>
                    <ServviceBox image={<GiLiver/>} text={"Hepatology"}/>
                

            </div>
        </div>
    </div>
    <div className="department_area  mb-5">
        <div className="container">
            
            <div className="row ">
                <div className="col-12">
                    <div className="depart_ment_tab mb-30">
                        <ul className="nav" id="myTab" role="tablist">
                            <li className="nav-item col-4 col-md-2 " role="presentation">
                                <button className="nav-link active" id="home-tab"  type="button" data-bs-toggle="pill" href="#home"  role="tab" aria-controls="home" aria-selected="false">
                                <FaTooth/>
                                    <h4>Dentistry</h4>
                                </button>
                            </li>
                            <li className="nav-item col-4 col-md-2"role="presentation">
                                <button className="nav-link" id="profile-tab" type="button" data-bs-toggle="pill" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                                <GiHeartOrgan/>
                                    <h4>Cardiology</h4>
                                </button>
                            </li>
                            <li className="nav-item col-4 col-md-2" role="presentation">
                                <button className="nav-link" type="button" id="ent-tab" data-bs-toggle="pill" href="#ent" role="tab" aria-controls="ent" aria-selected="false">
                                <BsFillEarFill/>
                                    <h4>entspecialists</h4>
                                </button>
                            </li>
                            <li className="nav-item col-4 col-md-2" role="presentation">
                                <button className="nav-link" type="button" id="atrology-tab" data-bs-toggle="pill" href="#atrology" role="tab" aria-controls="atrology" aria-selected="false">
                                <GiKidneys/>
                                    <h4>Nephrology</h4>
                                </button>
                            </li>
                            <li className="nav-item col-4 col-md-2" role="presentation">
                                <button className="nav-link" type="button" id="Neuroanatomy-tab" data-bs-toggle="pill" href="#Neuroanatomy" role="tab" aria-controls="contact" aria-selected="false">
                                <GiLiver/>
                                    <h4>Hepatology</h4>
                                </button>
                            </li>
                            <li className="nav-item col-4 col-md-2"role="presentation" >
                                <button className="nav-link" type="button" id="Blood-tab" data-bs-toggle="pill" href="#Blood" role="tab" aria-controls="contact" aria-selected="false">
                                <GiAnatomy/>
                                    <h4>Anatomy</h4>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="dept_main_info white-bg">
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                        <div className="row align-items-center no-gutters">
                            <div className="col-12 col-md-7">
                                <div className="dept_info w-100">
                                    <h2>Dentistry:</h2>
                                    <h3>Dentist with surgical mask holding <br/> scaler near patient</h3 >
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                    <Link href="#" className="dep-btn">Appointment<MdArrowForwardIos/></Link>
                                </div>
                            </div> 
                            <div className="col-12 col-md-5">
                                <div className="dept_thumb">
                                    <img src={des_img} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                        <div className="row align-items-center no-gutters">
                            <div className="col-12 col-md-7">
                                <div className="dept_info">
                                    <h2>Cardiology:</h2>
                                    <h3>Dentist with surgical mask holding <br/> scaler near patient</h3 >
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                    <Link href="#" className="dep-btn">Appointment<MdArrowForwardIos/></Link>
                                </div>
                            </div>
                            <div className="col-12 col-md-5">
                                <div className="dept_thumb">
                                    <img src={atrology_img} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="tab-pane fade" id="ent" role="tabpanel" aria-labelledby="ent-tab" tabIndex="0">
                        <div className="row align-items-center no-gutters">
                            <div className="col-12 col-md-7">
                                <div className="dept_info">
                                    <h2>Ent Specialists:</h2>
                                    <h3>Dentist with surgical mask holding <br/> scaler near patient</h3 >
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                    <Link href="#" className="dep-btn">Appointment<MdArrowForwardIos/></Link>
                                </div>
                            </div>
                            <div className="col-12 col-md-5">
                                <div className="dept_thumb">
                                    <img src={profile_img} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="atrology" role="tabpanel" aria-labelledby="atrology-tab" tabIndex="0">
                        <div className="row align-items-center no-gutters">
                            <div className="col-12 col-md-7">
                                <div className="dept_info">
                                    <h2>Nephrology:</h2>
                                    <h3>Dentist with surgical mask holding <br/> scaler near patient</h3 >
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                    <Link href="#" className="dep-btn">Appointment<MdArrowForwardIos/></Link>
                                </div>
                            </div>
                            <div className="col-12 col-md-5">
                                <div className="dept_thumb">
                                    <img src={atrology_img}  alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="tab-pane fade" id="Blood" role="tabpanel" aria-labelledby="Blood-tab" tabIndex="0"> */}
                    <div className="tab-pane fade" id="Blood" role="tabpanel" aria-labelledby="Blood-tab" tabIndex="0">
                        <div className="row align-items-center no-gutters">
                            <div className="col-12 col-md-7">
                                <div className="dept_info">
                                    <h2>Hepatology:</h2>
                                    <h3>Dentist with surgical mask holding <br/> scaler near patient</h3 >
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                    <Link href="#" className="dep-btn">Appointment<MdArrowForwardIos/></Link>
                                </div>
                            </div>
                            <div className="col-12 col-md-5">
                                <div className="dept_thumb">
                                    <img src={atrology_img}  alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="tab-pane fade" id="Neuroanatomy" role="tabpanel" aria-labelledby="Neuroanatomy-tab" tabIndex="0"> */}
                    <div className="tab-pane fade" id="Neuroanatomy" role="tabpanel" aria-labelledby="Neuroanatomy-tab" tabIndex="0">
                        <div className="row align-items-center no-gutters">
                            <div className="col-12 col-md-7">
                                <div className="dept_info">
                                    <h2>Anatomy:</h2>
                                    <h3>Dentist with surgical mask holding <br/> scaler near patient</h3 >
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                    <Link href="#" className="dep-btn">Appointment<MdArrowForwardIos/></Link>
                                </div>
                            </div>
                            <div className="col-12 col-md-5">
                                <div className="dept_thumb">
                                    <img src={atrology_img}  alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
                    
                    
                    </div>
                    
                </div>
            </div>
        <SectionTow/>
    </>
)
}

export default Services