import React from 'react'
import MainTitle from './MainTitle'
import {LuScreenShare} from 'react-icons/lu';
import {FaUserDoctor} from 'react-icons/fa6';
import {BiSolidOffer} from 'react-icons/bi';
import img_1 from "../images/section3/car.png"
import img_2 from "../images/section3/gig.png"
import img_4 from "../images/section3/head.png"
import img_3 from "../images/section3/injc.png"
import img_5 from "../images/section3/madii.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const SectionThree = () => {
  return (
<>
    <div className="sectionthree ">
        <MainTitle props={"LEARN ANYTHING"}/>
        <div className="container">
        <div className="row">
            <div className="col-12 col-md-5">
                <div className="boxone">
                    <h1>We provide the best services in all fields of medicine:</h1>
                    <div className="boxx-icon d-flex">
                        <LuScreenShare/>
                        <div className="box-icon-desc">
                            <h4>Easy Booking</h4>
                            <p>Far far away, behind the word mountains, 
                            far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                    <div className="boxx-icon d-flex">
                        <FaUserDoctor/>
                        <div className="box-icon-desc">
                            <h4>Team professional</h4>
                            <p>Far far away, behind the word mountains, 
                            far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                    <div className="boxx-icon d-flex">
                        <BiSolidOffer/>
                        <div className="box-icon-desc">
                            <h4>Best Price Guarantee</h4>
                            <p>Far far away, behind the word mountains, 
                            far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="col-12 col-md-7">
                <div className="boxs-afaf">
                <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                breakpoints={
                {
                    0:{
                    slidesPerView:2,
                    spaceBetween:5,
        
                    },
                    480:{
                    slidesPerView:2,
                    spaceBetween:10,
        
                    },
                    1024:{
                    slidesPerView:3,
                    spaceBetween:15,
        
                    }
                }
                }>
                    <SwiperSlide>
                    <div className="box-afaf">
                        <img src={img_1} alt="" />
                        <h5>Sugery</h5>
                        <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
                        <button className='btns' >View More</button>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="box-afaf">
                        <img src={img_2} alt="" />
                        <h5>Emergency</h5>
                        <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
                        <button className='btns' >View More</button>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="box-afaf">
                        <img src={img_3} alt="" />
                        <h5>Treatment</h5>
                        <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
                        <button className='btns' >View More</button>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="box-afaf">
                        <img src={img_4} alt="" />
                        <h5>Diagnostics</h5>
                        <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
                        <button className='btns' >View More</button>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="box-afaf">
                        <img src={img_5} alt="" />
                        <h5>Vaccine</h5>
                        <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
                        <button className='btns' >View More</button>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="box-afaf">
                        <img src={img_1} alt="" />
                        <h5>Sugery</h5>
                        <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
                        <button className='btns' >View More</button>
                    </div>
                    </SwiperSlide>

                </Swiper>
                </div>
            </div>
        </div>
        </div>
    </div>
</>
  )
}

export default SectionThree
