import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Boats from './pages/Boats';
import Booked from './pages/Booked';
import Home from './pages/Home';
import Map from './pages/Map';
import Boat2 from './pages/Boatss/Boat2';
import Boat3 from './pages/Boatss/Boat3';
import Boat4 from './pages/Boatss/Boat4';
import Boat5 from './pages/Boatss/Boat5';
import Boat6 from './pages/Boatss/Boat6';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/boats' element={<Boats />}/>
          <Route path='/booked' element={<Booked />}/>
          <Route path='/map' element={<Map />}/>
          <Route path='/boat2' element={<Boat2/>}/>
          <Route path='/boat3' element={<Boat3/>}/>
          <Route path='/boat4' element={<Boat4/>}/>
          <Route path='/boat5' element={<Boat5/>}/>
          <Route path='/boat6' element={<Boat6/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
