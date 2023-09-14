import React from 'react'
import { FcHome } from 'react-icons/fc';
import { MdArrowForwardIos } from 'react-icons/md';
import { Link } from 'react-router-dom';


const ImagContent = ({mainTitle , title}) => {
  return (
<>
  <div className="hero-image">
    <div className="overlay ">
      <div className="container">
        <div className="row align-items-center justify-content-center slider-text ">
          <div className="col-9 text-center">
            <h1 className=" ">{mainTitle}</h1>
            <p className="breadcrumbs"><span className="me-2"><Link to={"/"}><FcHome className='svggg' /> Home <MdArrowForwardIos/></Link></span> <span>{title}<MdArrowForwardIos/></span></p>
            </div>
        </div>
      </div>

    </div>
  </div>
</>
  )
}

export default ImagContent
