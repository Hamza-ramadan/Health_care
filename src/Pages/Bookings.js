import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import MainTitle from '../components/MainTitle';
import { deleteproduct } from '../Redux_TK/Reducers/Abooking';

const Bookings = () => {
    const dispatch = useDispatch();

    const Booking = useSelector((state) => state.Booking)
    const handledele =(id)=>{
        dispatch(deleteproduct({id:id}))
      }
    
  return (
    <>
    <div className="main-table">
        <div className="container">
        <MainTitle props={"Appointment"}/>

            <table className="mt-3 table table-striped">
                <thead>
                <tr>
                    <th className="col">ID</th>
                    <th className="col">Name</th>
                    <th className="col">Complaint</th>
                    <th className="col">Date</th>
                    <th className="col">Age</th>
                    <th className="col">Handle</th>
                </tr>
                </thead>
                
            <  tbody>
                
                { Booking.length > 0 ? Booking.map((book) => 
                
                <tr key={book.id} >
                    
                    <td data-lable="#:" >{book.id}</td>
                    <td data-lable="Name:" >{book.name}..</td>
                    <td  data-lable="Complaint:" >{book.complaint.slice(0 ,50)}.....</td>
                    <td data-lable="Date:" >{book.date}</td>
                    <td data-lable="Age:" >{book.age}Years</td>
                    <td data-lable="Handle:" >
                    <button className='btn btn-danger btn-sm ms-1' onClick={()=> handledele(book.id) }  >Delete</button> 
                        {/* <Link to={`${product.id}`} className='btn btn-info btn-sm ms-1'>View</Link> */}
                        <Link to={`${book.id}/update`} className='btn btn-primary ms-1 btn-sm'>Edit</Link>
                    </td>
                </tr>)
                :"0"}

                </tbody>

            </table>
        </div>
    </div>
     
    </>
  )
}

export default Bookings