import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../Redux_TK/Reducers/Abooking';

const Appointment = () => {
    const [name , setName] = useState("");
    const [phone , setPhone] = useState(0);
    const [specialization, setSpecialization] = useState("");
    const [age, setAge] = useState(0);
    const [date, setDate] = useState(0);
    const [email, setEmail] = useState(0);
    const [complaint, setComplaint] = useState("");
    const Booking = useSelector((state) => state.Booking)
    // console.log(products);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit =(e)=>{
    e.preventDefault();
    dispatch(addBook({id:Booking[Booking.length - 1].id + 1 ,name,phone,specialization,age,email,date ,complaint}))
    navigate("/");
    console.log(specialization);

    
  }
  return (
<>
    <div className="main-appoi ">
    <div className='container py-4'>
            <h2>Book now at the hospital with a discount of up to 70% on treatment:</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label htmlFor="nameBook" className="form-label">The name is triple:</label>
            <input type="text" placeholder='Enter Your Full Name.' className="form-control" id="nameBook" aria-describedby="Name-Book"
                onChange={(e) => setName(e.target.value)}  />
            </div>
            <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone:</label>
                
            <input placeholder='Price' type="text" className="form-control" id="phone" aria-describedby="phone-Number"
            onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="mb-3">
            <label htmlFor="specialization" className="form-label">Specialization:</label>
            {/* <input type="text" placeholder='Product Description' className="form-control" id="specialization"
            aria-describedby="Product Description" onChange={(e) => setSpecialization(e.target.value)} /> */}
            <select onChange={(e) => setSpecialization(e.target.value)} id="specialization">
            <option value="####">#########</option>
                    <option value="Ophthalmology">Ophthalmology</option>
                    <option value="Dermatology">Dermatology</option>
                    <option value="neurology">neurology</option>
                    <option value="Hematology">Hematology </option>
                    <option value="Endocrinology">	Endocrinology </option>
                </select>
            </div>
            <div className="mb-3">
            <label htmlFor="Age" className="form-label">Age:</label>
            <input type="number" placeholder='Enter Your Age .' className="form-control" id="Age"
            aria-describedby="Age"onChange={(e) => setAge(e.target.value)}  />
            </div>
            <div className="mb-3">
            <label htmlFor="Date" className="form-label">Date:</label>
            <input type="date" placeholder='Enter Date Now.' className="form-control" id="Date"
            aria-describedby="Age"onChange={(e) => setDate(e.target.value)}  />
            </div>
            <div className="mb-3">
            <label htmlFor="Email" className="form-label">Email:</label>
            <input type="email" placeholder='Enter Your Email .' className="form-control" id="Email"
            aria-describedby="Email"onChange={(e) => setEmail(e.target.value)}  />
            </div>

            <div className="mb-3">
            <label className="form-label" htmlFor="complaint">What do you complain or feel:</label>
            <textarea className="form-control" id="complaint"onChange={(e) => setComplaint(e.target.value)} rows="7"></textarea>
        </div>
            <button type="submit" 
            className="btn btn-primary">Add Appointment</button>
        </form>
        </div>
    </div>

</>
)
}

export default Appointment