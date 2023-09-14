import React from 'react'
import ImagContent from '../components/ImagContent'
import { FaWpforms } from 'react-icons/fa';
import { HiMiniSquare3Stack3D } from 'react-icons/hi2';
import { BiImages } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import AboutSer from '../components/AboutSer';
import Professional from '../components/Professional';
import FaqQues from '../components/FaqQues';


const About = () => {
  return (
<>
    <ImagContent mainTitle={"About Us"} title={"About"}/>
    <section id="why-us" className="why-us">
      <div className="container">

        <div className="row">
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="content">
              <h3>Why Choose HEALTHCARE?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
              </p>
              <div className="text-center">
                <Link href="#" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <FaWpforms/>
                    <h4>Corporis voluptates sit</h4>
                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                  <HiMiniSquare3Stack3D/>
                    <h4>Ullamco laboris ladore pan</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                  <BiImages/>
                    <h4>Labore consequatur</h4>
                    <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    <AboutSer/>
    <Professional/>
    <FaqQues/>
    
</>
  )
}

export default About