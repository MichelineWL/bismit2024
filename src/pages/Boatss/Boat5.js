import Navbar from "../../components/navbar";
import { Link } from "react-router-dom";

const Boat5 = () => {
    return (
        <div className='boats-page'>
            <Navbar />
            <div className='container'>
                <div className='first-column'>
                    <div className='first-row bg-white mx-3 mb-10'> name: Nama dari perahu yang ingin kalian perlihatkan pada pelabuhan..</div>
                    <div className='first-row bg-white mx-3'> capacity: Kapasitas yang dapat ditampung oleh perahu. color: Warna dari sebuah perahu.</div>
                </div>
                <div className='second-column'>
                    <div className='second-row mx-3'> 
                        <a className='bg-red-200 px-5'>Status  :  isn't_Sailing</a>
                        <img className='mt-3' src='https://magazine.diviac.com/content/images/2016/09/amira-sailing-dive-boat.jpg'></img>
                        <Link to='/Boat6'>
                            <button className='mt-6 px-6 py-3 bg-red-100 font-bold'>Another Boat</button>
                        </Link>
                    </div>
                </div>
                <div className='third-column'>
                    <div className='third-row bg-white mx-3 mb-10'> bough_at: Tanggal dari perahu ketika dibeli. updated_at: Tanggal terakhir kali perahu diedit.</div>
                    <div className='third-row bg-white mx-3'>description: Deskripsi dari sebuah perahu. </div>                
                </div>
            </div>
        </div>
    );
}
 
export default Boat5;