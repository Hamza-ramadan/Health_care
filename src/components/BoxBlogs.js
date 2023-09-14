import React from 'react'
import { GiBleedingEye } from 'react-icons/gi';
import { RiAdminLine } from 'react-icons/ri';
import { BsFillChatHeartFill } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';

const BoxBlogs = ({image}) => {
  return (
<>
    <div className="col-12 col-md-6">
        <div className="blogs-lest-box">
            <img className='img-fluid' src={image} alt="" />
            <div className="blogs-lest-desc">
                <h6>Why Primary treatment is important ?</h6>
                <ul>
                    <li><span><GiBleedingEye/></span>(12)</li>
                    <li><span><RiAdminLine/></span>Admin</li>
                    <li><span><BsFillChatHeartFill/></span>(32)</li>
                </ul>
                <p>Lorem Ipsum, type lorem then press the shortcut. The default keyboard shortcut is the same keyboard shortcut is the</p>
                <button>Read More<AiOutlineArrowRight/></button>
            </div>
        </div>
    </div>
</>
  )
}

export default BoxBlogs
