import React from 'react'
import { Link } from 'react-router-dom'
const Professional = () => {
  return (
    <div>
      <div className="professional">
      <div className="layy">
            <div className="container">
                <div className="title-another row">
                    <h4>We Are Professionals</h4>
                    <h2>Professional Approach</h2>
                    <h3>and Quality Services</h3>
                    <div className="btn-ro">
                        <Link to={"/Appointment"} className="btns">Book an Appointment</Link>
                    </div>

                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Professional
