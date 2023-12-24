import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className='home-page'>
            <Navbar />
            <div className='start-button border-2 rounded-3xl border-blue-800'>
                <Link to='/Boats'>
                    <button className='text-2xl text-blue-800 font-semibold hover:font-bold'>Start</button>
                </Link>
            </div>
        </div>
        
    );
}
 
export default Home;