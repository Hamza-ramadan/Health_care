import React from 'react'
import "./maon.css"
import img_1 from "../images/h1_hero.png"
import img_2 from "../images/slider-3.jpg"
import { BsArrowRight } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SectionTow from '../components/SectionTow';
import SectionThree from '../components/SectionThree';
import SectionFour from '../components/SectionFour';
import Professional from '../components/Professional';
import Works from '../components/Works';
import MainTitle from '../components/MainTitle';
import BoxBlogs from '../components/BoxBlogs';
import imgblog_1 from "../images/departments-1.jpg"
import imgblog_2 from "../images/blog_03.jpg"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div className="slider">
    <Swiper
    slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className='myswiber'
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        autoplay={true}
>
        <SwiperSlide>
        <div className="item">
                    <div className="slider-img"><img src={img_1} alt=""/></div>
                    <div className="container">
                        
                                <div className="slider-captions" >
                                    <div className="pppp">
                                    <span>_____</span><p>Committed to success</p>
                                    </div>
                                    <h1 className="slider-title" data-aos="fade-up">Feeling stress <span>or</span> anxious?</h1>
                                    <p className="slider-text">We can help you conquer a wide range of psychological and emotional problems.</p>
                                    <div className="pb-4 butonsss" data-aos="fade-right">
                                    <Link to={"/Services"} className="btns">See our services<BsArrowRight/></Link>
                                    <Link to={"/About"} className="btns btnnnnnnnn mt-3">who are we <BsArrowRight/></Link>
                                    </div>
                                    
                                
                        </div>
            </div>
            
            
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item">
                    <div className="slider-img"><img src={img_2} alt=""/></div>
                    <div className="container">
                        
                                <div className="slider-captions">
                                    <div className="pppp">
                                    <span>______</span><p>Committed to success</p>
                                    </div>
                                    <h1 className="slider-title">Feeling stress <span>or</span> anxious?</h1>
                                    <p className="slider-text mb-5">We can help you conquer a wide range of psychological and emotional problems.</p>
                                    <div className="pb-4 ">
                                    <a href="#/" className="btns">See our services<BsArrowRight/></a>
                                    <a href="#/" className="btns btnnnnnnnn mt-3">who are we <BsArrowRight/></a>
                                    </div>
                                    
                                
                        </div>
            </div>
            
            
        </div>
        </SwiperSlide>

    </Swiper>
    
    
        
    </div>
      <SectionTow/>
      <SectionThree/>
      <SectionFour/>
      <Professional/>
      <Works/>
      <div className="blogs-lest py-5">
        <MainTitle props={"Latest Blog"}/>
        
        <div className="container">
        <p >We can talk for a long time about advantages of our Dental clinic before other 
        medical treatment facilities. But you can read the following facts in order to make sure of all pluses of our clinic:</p>
          <div className="row">
            <BoxBlogs image={imgblog_1}/>
            <BoxBlogs image={imgblog_2}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home