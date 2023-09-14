import React from 'react'
import img_1 from "../images/section2/doctors-4.jpg"
import img_2 from "../images/section2/gallery-7.jpg"
import img_3 from "../images/section2/gallery_03.jpg"
import { BiSolidSquareRounded } from 'react-icons/bi';
import { FaAmbulance } from 'react-icons/fa';
// GiPersonInBed FaAmbulance
import MainTitle from './MainTitle';
import {GiPersonInBed} from 'react-icons/gi';
import medci from "../images/section2/medcin.png"
import injc from "../images/section2/injc.png"
import { Link } from 'react-router-dom';

const SectionTow = () => {
  return (
    <>
        <div className="sectiontow sections spikes">
            <MainTitle props={"Our Medical Camp"}/>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                            <div className="ulsimg" data-aos="flip-left">
                                <ul>
                                    <li><img className='imgee-1' src={img_3} alt="" /></li>
                                    <li><img className='imgee-2' src={img_1} alt="" /></li>
                                    <li><img className='imgee-3' src={img_2} alt="" /></li>
                                    <li>
                                        <div className="years">20 <span>Year Experience</span></div>
                                    </li>
                                    <i><BiSolidSquareRounded/></i>
                                </ul>
                            </div>
                    </div>
                    <div className="col-12 col-lg-6" data-aos="fade-up">
                            <div className="section22-desc ">
                                <h5>Camp :</h5>
                                <h1>The Great Place Of Medical Hospital Center.</h1>
                                <p>We provide the special tips and advice's of heath care 
                                treatment and high level of best technology involve in the our hospital.</p>
                                <div className="row mb-4">
                                    <div className="col-12 col-sm-6" data-aos="flip-left">
                                        <div className="boxss boxss11">
                                            <FaAmbulance/>
                                            <h6>Emergency Help.</h6>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6" data-aos="flip-left"> 
                                        <div className="boxss boxss22">
                                            <GiPersonInBed/>
                                            <h6>Qualified Doctors.</h6>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6" data-aos="flip-left">
                                        <div className="boxss boxss33">
                                            <img src={injc} alt="" />
                                            <h6>Best Professionals.</h6>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6" data-aos="flip-left">
                                        <div className="boxss boxss44">
                                            <img src={medci} alt="" />
                                            <h6>Medical Treatment.</h6>
                                        </div>
                                    </div>
                                </div>
                                <Link  to={"/About"} className='btns'>Read More</Link>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SectionTow