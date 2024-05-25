import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import About from './pages/About';
import MyDay from './pages/Event';
import Progress from './pages/Merch';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/landingpage' element={<LandingPage />}/>
          <Route path='/navbar' element={<Navbar />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/myday' element={<MyDay />}/>
          <Route path='/progress' element={<Progress />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
