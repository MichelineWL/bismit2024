import { Link } from 'react-router-dom';
import Home from '../pages/Home';
import Boats from '../pages/Boats';
import Booked from '../pages/Booked';
import Map from '../pages/Map';

const Navbar = () => {
    return(
        <nav className='navbar shadow-md sticky top-0' style = {{color:'white',}}>
            <h1 style ={{
                color: 'white'
            }} className ='pl-10 text-3xl'>Nyonya Beti's Port</h1>
            <div>
                <Link to='/Home'>
                    <button className='pl-80 hover:font-bold'>Home</button>
                </Link>
                <Link to='/Boats'>
                    <button className='pl-36 hover:font-bold'>Boats</button> 
                </Link>
                <Link to='/Booked'>
                    <button className='pl-36 hover:font-bold'>Booked</button>
                </Link>
                <Link to='/Map'>
                    <button className='pl-36 pr-24 hover:font-bold'>Map</button>
                </Link>
                
            </div>
            <a className='img-boat'>
                <img src="https://i.ibb.co/zNmLrXM/boat-icon.png" alt="boat-icon" border="0"></img>
            </a>
        </nav>
    )
}

export default Navbar;