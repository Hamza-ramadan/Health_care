import React from 'react'
import { BiSolidArrowFromLeft } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
<>
<footer>
    <div className="footer-top">
        <div className="container">
    <div className="row">

<div className="col-12 col-sm-7 col-lg-3 footer-contact">
  <h4>HEALTHCARE</h4>
  <div>
   HI 96712 , Haleiwa Street <br/>
   Hawaii, NY 535022<br/>
    United States <br/><br/>
    <h3>Phone:</h3> +201117585124<br/>
    <h3>Email:</h3> hahar067@gmail.com<br/>
  </div>
</div>

<div className="col-6 col-sm-5 col-lg-2 footer-links">
  <h4>Useful Links:</h4>
  <ul>
    <li><BiSolidArrowFromLeft/> <Link href="#">Home</Link></li>
    <li><BiSolidArrowFromLeft/> <Link href="#">About us</Link></li>
    <li><BiSolidArrowFromLeft/> <Link href="#">Services</Link></li>
    <li><BiSolidArrowFromLeft/> <Link href="#">Terms of service</Link></li>
    <li><BiSolidArrowFromLeft/> <Link href="#">Privacy policy</Link></li>
  </ul>
</div>

<div className="col-6 col-sm-5 col-lg-2 footer-links">
  <h4>Our Services:</h4>
  <ul>
    <li><BiSolidArrowFromLeft/> <Link href="#">Web Design</Link></li>
    <li><BiSolidArrowFromLeft/> <Link href="#">Web Development</Link></li>
    <li><BiSolidArrowFromLeft/> <Link href="#">Product Management</Link></li>
    <li><BiSolidArrowFromLeft/> <Link href="#">Marketing</Link></li>
    <li><BiSolidArrowFromLeft/> <Link href="#">Graphic Design</Link></li>
  </ul>
</div>

<div className="col-12 col-sm-7 col-lg-3 footer-newsletter">
  <h4>Join Our Newsletter</h4>
  <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
  <form action="" method="post">
    <input type="email" name="email"/><input type="submit" value="Subscribe"/>
  </form>
</div>

</div>
    </div>
    </div>
    <div className="container d-md-flex py-4">

      <div className="me-md-auto text-center text-md-start">
        <div className="copyright">
          &copy; Copyright <strong><span>HEALTHCARE</span></strong> العبدلله 
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
</footer>
</>
  )
}

export default Footer
