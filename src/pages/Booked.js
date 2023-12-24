import Navbar from "../components/navbar";
const Booked = () => {
    return (
        <div className = 'booked-page'>
            <Navbar />
            <div className='columns-3 mt-20 ml-7 '>
                <div className='ml-20'>
                    <img className='ml-5 mb-12' src="https://i.ibb.co/1mcCkBV/Group-1-3.png"/>
                    <img className='ml-5' src="https://i.ibb.co/XL9zPTW/Group-4-1.png"/>
                </div>
                <div className='ml-20'>
                    <img className='ml-5 mb-12' src="https://i.ibb.co/5GLgwNd/Group-2-1.png"/>
                    <img className='ml-5' src="https://i.ibb.co/19P909f/Group-5-1.png"/>
                </div>
                <div className='ml-20'>
                    <img className='ml-5 mb-12' src="https://i.ibb.co/DtY1NhG/Group-3-1.png"/>
                    <img className='ml-5' src="https://i.ibb.co/2FG15c9/Group-6-1.png"/>
                </div>
            </div>

        </div>
    );
}
 
export default Booked;