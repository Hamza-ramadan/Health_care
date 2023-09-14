import React from 'react'
import MainTitle from './MainTitle'
import { BsCalendar2WeekFill } from 'react-icons/bs';
import { BsArrowRightSquareFill } from 'react-icons/bs';
import img__1 from "../images/section4/gallery-1.jpg"
import img__2 from "../images/section4/gallery-4.jpg"
import img__3 from "../images/section4/gallery-8.jpg"
import img__11 from "../images/section4/team-memb1.jpg"
import img__22 from "../images/section4/team-memb2.jpg"
import img__33 from "../images/section4/team-memb4.jpg"
const SectionFour = () => {
  return (
    <>
    <div className='sectionfour spikes'>
    <MainTitle props={"Latest News"}/>
    <div className="container">
        <h1>Our Latest News</h1>
        <div className="sec-4-boxs">
            <div className="sec-4-box" data-aos="flip-left">
                <img src={img__1} alt="" />
                <div className="dsec-sec4">
                    <p><img src={img__11} alt="" /><span>Peter Packer</span></p>
                    <p><BsCalendar2WeekFill/><span>JAN. 20, 2021</span></p>
                </div>
                <h5>Can you get a diflucan prescription online?</h5>
                <center><button className='btns' >Read More <BsArrowRightSquareFill/></button></center>
                
            </div>
            <div className="sec-4-box sssss"data-aos="flip-left" >
                <img src={img__3} alt="" />
                <div className="dsec-sec4">
                    <p><img src={img__22} alt="" /><span>Peter Packer</span></p>
                    <p><BsCalendar2WeekFill/><span>JAN. 20, 2021</span></p>
                </div>
                <h5>Can you get a diflucan prescription online?</h5>
                <center><button className='btns' >Read More <BsArrowRightSquareFill/></button></center>
                
            </div>
            <div className="sec-4-box" data-aos="flip-left">
                <img src={img__2} alt="" />
                <div className="dsec-sec4">
                    <p><img src={img__33} alt="" /><span>Peter Packer</span></p>
                    <p><BsCalendar2WeekFill/><span>JAN. 20, 2021</span></p>
                </div>
                <h5>Can you get a diflucan prescription online?</h5>
                <center><button className='btns' >Read More <BsArrowRightSquareFill/></button></center>
                
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default SectionFour
