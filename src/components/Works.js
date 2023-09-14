import React from 'react'
import { PiArrowFatLinesRightBold } from 'react-icons/pi';
import MainTitle from './MainTitle';


const Works = () => {
  return (
    <>
    <div className="work">
    <MainTitle props={"Working Process"}/>
    <div className="workes">
    <div className="container">
    <div className="row ">
        <div className="col-12 col-lg-4">
            <div className="work-bx">
            <div className="work-num-bx">01</div>
            <div className="work-content">
                <h5 className="title text-secondary mb-10">Make Appointmnet</h5>
                <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                <button className="btns">View More<PiArrowFatLinesRightBold/></button>
                </div>
            </div>
        </div>
        <div className="col-12 col-lg-4 ">
        <div className="work-bx active">
            <div className="work-num-bx">02</div>
            <div className="work-content">
                <h5 className="title  mb-10">Take Treatment</h5>
                <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                <button className="btns ">View More<PiArrowFatLinesRightBold/></button>
            </div>
            </div>
        </div>
        <div className="col-12 col-lg-4">
        <div className="work-bx">
            <div className="work-num-bx">03</div>
            <div className="work-content">
                <h5 className="title text-secondary mb-10">Registration</h5>
                <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                <button className="btns">View More<PiArrowFatLinesRightBold/></button>
            </div>
        </div>
        </div>
    </div>  
    </div>
    </div>
    </div>
    </>
  )
}

export default Works
