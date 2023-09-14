import React from 'react'
import ImagContent from '../components/ImagContent'
import Imag_doctor from '../images/doctor.jpg'
import MainTitle from '../components/MainTitle'
import { Link } from 'react-router-dom'
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { BiHomeHeart } from 'react-icons/bi';
import { BsPhoneVibrate } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
const Contact = () => {
  return (
    <>
    <ImagContent mainTitle={"Contact"} title={"Contact Us"}/>
    <div className="image-doctor text-center">
        <img src={Imag_doctor} className='img-fluid' alt=""/>
        <div className="container">
        <MainTitle props={"Contact Us:"}/>
        <div className="row">
            <div className="col-12 col-lg-8">
            <div className="contact-inner-wrapper " >
                            <div className="">
                                <h3 className="contact-title mb-4">Contact:</h3>
                                <form action="" className='d-flex flex-column gap-20'>
                                    <div className="">
                                        <input type="text" className="form-control" placeholder='Name' />
                                    </div>
                                    <div className="">
                                        <input type="email" className="form-control" placeholder='Email' />
                                    </div>
                                    <div className="">
                                        <input type="tel" className="form-control" placeholder='Mobile Number'/>
                                    </div>
                                    <div className="">
                                        <textarea name="" id=""  cols="30" className='w-100 form-control' placeholder='Comments' rows="4"></textarea>
                                    </div>
                                    <div className="">
                                        <button className='button btns'>Send Message</button>
                                    </div>
                                </form>
                            </div>
                            </div>
            </div>
            <div className="col-12 col-lg-4">
                <div className="boxs-contaens">
                    <div className="box-content d-flex">
                        <BiHomeHeart/>
                        <div className="desc">
                            <h5>Location:</h5>
                            <p>A108 Adam Street, New York, NY 535022</p>
                        </div>
                    </div>
                    <div className="box-content d-flex">
                        <BsPhoneVibrate/>
                        <div className="desc">
                            <h5>Call:</h5>
                            <p>+201117585124</p>
                        </div>
                    </div>
                    <div className="box-content d-flex">
                        <TfiEmail/>
                        <div className="desc">
                            <h5>Email:</h5>
                            <p>hahar067@gmail.com</p>
                        </div>
                    </div>
                </div>
                
                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                    <Link href="#" className="twitter"><AiOutlineTwitter/></Link>
                    <Link href="#" className="facebook"><FaFacebookF/></Link>
                    <Link href="#" className="instagram"><AiOutlineInstagram/></Link>
                    <Link href="#" className="google-plus"><AiOutlineGooglePlus/></Link>
                    <Link href="#" className="linkedin"><FaLinkedinIn/></Link>
            </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Contact