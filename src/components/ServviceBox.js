import React from 'react'

const ServviceBox = ({image , text}) => {
  return (
    <>
        <div className="col-12 col-sm-6 col-lg-3 text-center d-flex align-items-stretch">
         <div className="servvice-box">
                        <div className="icon">
                            {image}
                        </div>
                        <div className="desc">
                        <h2>{text}</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                    </div>
    </>
  )
}

export default ServviceBox