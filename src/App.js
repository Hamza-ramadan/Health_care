import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Appointment from './Pages/Appointment';
import Bookings from './Pages/Bookings';
import UpDate from './Pages/UpDate';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Layout/>}>
          <Route  path='/' element={<Home/>}/>
          <Route  path='/About' element={<About/>}/>
          <Route  path='/Services' element={<Services/>}/>
          <Route  path='/Contact' element={<Contact/>}/>
          <Route  path='/Appointment' element={<Appointment/>}/>
          <Route  path='/Bookings' element={<Bookings/>}/>
          <Route path={`Bookings/:id/update`} element={<UpDate/>}/>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
