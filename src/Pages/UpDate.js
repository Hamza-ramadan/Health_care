import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Updateproduct } from '../Redux_TK/Reducers/Abooking';

const UpDate = () => {
    
    const booking = useSelector((state) => state.Booking)
    const {id} = useParams();
    const existingusers = booking.filter(f => f.id == id)
    const {name , phone ,specialization,age ,email,date,complaint} =existingusers[0];

  const [uname , setName] = useState(name);
  const [uphone , setPhone] = useState(phone);
  const [uspecialization , setSpecialization] = useState(specialization);
  const [uage , setAge] = useState(age);
  const [uemail , setemail] = useState(email);
  const [udate , setdate] = useState(date);
  const [ucomplaint, setComplaint] = useState(complaint);
  const dispatch = useDispatch();
  const navigate = useNavigate();




  const handleUpdate =(e)=>{
    e.preventDefault();
    dispatch(Updateproduct({
        id:id,
        name :uname,
        phone :uphone,
        specialization :uspecialization,
        age :uage,
        date :udate,
        email :uemail,
        complaint :ucomplaint,
    }))
    navigate("/Bookings");
  }


  return (
    <>
    <div className="update-page py-4">
    <div className='container'>
          
        <h2>Modify appointments :</h2>
            <form onSubmit={handleUpdate} >
            <div className="mb-3">
            <label htmlFor="productTitle" className="form-label">Enter your full name:</label>
            <input type="text" placeholder='Name' className="form-control" id="name" aria-describedby="name"
                value={uname} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="mb-3">
            <label htmlFor="age" className="form-label">Enter your age:</label>
            <input type="text" placeholder='Name' className="form-control" id="age" aria-describedby="age"
                value={uage} onChange={(e) => setAge(e.target.value)}/>
            </div>
            <div className="mb-3">
            <label htmlFor="complaint" className="form-label">Complaint:</label>
            <input type="text" placeholder='Complaint' className="form-control" id="complaint" aria-describedby="complaint"
                value={ucomplaint} onChange={(e) => setComplaint(e.target.value)}/>
            </div>
            <div className="mb-3">
            <label htmlFor="specialization" className="form-label">Specialization:</label>
            <select value={uspecialization} onChange={(e) => setSpecialization(e.target.value)} id="specialization">
                    <option value="Ophthalmology">Ophthalmology</option>
                    <option value="Dermatology">Dermatology</option>
                    <option value="neurology">neurology</option>
                    <option value="Hematology">Hematology </option>
                    <option value="Endocrinology">	Endocrinology </option>
            </select>
            
            </div>
            <div className="mb-3">
            <label htmlFor="uphone" className="form-label">Enter your number phone:</label>
            <input type="text" placeholder='phone number' className="form-control" id="uphone" aria-describedby="uphone"
                value={uphone} onChange={(e) => setPhone(e.target.value)}/>
            </div>
            <div className="mb-3">
            <label htmlFor="udate" className="form-label">Enter date:</label>
            <input type="date" placeholder='udate' className="form-control" id="udate" aria-describedby="udate"
                value={udate} onChange={(e) => setdate(e.target.value)}/>
            </div>
            <div className="mb-3">
            <label htmlFor="Email" className="form-label">Enter your Email:</label>
            <input type="text" placeholder='udate' className="form-control" id="Email" aria-describedby="Email"
                value={uemail} onChange={(e) => setemail(e.target.value)}/>
            </div>
            
        <button type="submit" 
        className="btn btn-primary">UpDate Product</button>
    </form>
    </div>
    </div>
    </>
  )
}

export default UpDate