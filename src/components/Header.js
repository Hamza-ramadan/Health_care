import React, { useRef } from 'react'
import logo from "../images/Logo.png"
import "./component.css"
import { BsClockHistory } from 'react-icons/bs';
import { PiPhoneCallThin } from 'react-icons/pi';
import { CiLocationOn } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const navref = useRef();
    const buttonrefnone = useRef();
    const buttonrefshow = useRef();
    const showNav = () =>{
       navref.current.classList.toggle("responsive-nav");
       buttonrefnone.current.classList.toggle("responsive-button");
       buttonrefshow.current.classList.toggle("responsive-button-show");
    }
  return (
    <>
        <nav className="header-top-script py-2">
            <div className="container">
            <div className="row">
            <div className="col-12 col-xl-5 text-center">
                <div className="d-flex logo-img" data-aos="fade-right">
                    <img src={logo} alt="" />
                    <div className="des-logo">
                        <h1>healthcare</h1>
                        <p>All health specialties</p>
                    </div>
                </div>
                
            </div>
            <div className="col-xl-7 col-12">
                <div className="boxsssssssss">
                <div className="row align-items-end  ">
                <div className="col-12 col-sm-5 .col-md-4 mt-2">
                    <div className="d-flex" >
                        <i><BsClockHistory/></i>
                        <div className="decee-logo">
                            <h5>Monday - FraiDay</h5>
                            <p>8:00AM-8:00PM</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-3 .col-md-4">
                    <div className="d-flex mt-2">
                        
                        <i ><PiPhoneCallThin/></i>
                        <div className="decee-logo">
                            <h5>Call Us</h5>
                            <p>+01117585124</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-4">
                    <div className="d-flex mt-2">
                        <i ><CiLocationOn/></i>
                        <div className="decee-logo">
                            <h5>Location</h5>
                            <p>Cairo-Egypt  </p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </div>
            
        </div>
    </nav>
  
  
    <header className="header-bottom">
        <div className="container">
            
          <div className="row">

          <div className="col-12  d-flex justify-content-between align-items-center gap-30">
        <button ref={buttonrefshow} className='btnclosenav' onClick={showNav}><IoMdClose/></button>
        <button ref={buttonrefnone} className='btnshownav' onClick={showNav}><AiOutlineMenuUnfold/></button>

            <div className="navinavi" ref={navref}>

                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/About"}>About</NavLink>
                <NavLink to={"/Services"}>Services</NavLink>
                <NavLink to={"/Contact"}>Contact</NavLink>
                <NavLink to={"/Bookings"}>Bookings</NavLink>
            </div>
            
            <div className="opniop " data-aos="fade-left">
                <NavLink to={"/Appointment"}>Make an Appointment</NavLink>
            </div>

          </div>
          </div> 
        </div>
      </header>
    </>
  )
}

export default Header