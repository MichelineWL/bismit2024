import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='shadow-md sticky top-0 bg-white h-20 flex items-center justify-between px-10'>
            <h1 className='text-2xl font-semibold'>Journalings</h1>
            <div className='space-x-6'>
                <Link to='/About'>
                    <button className='text-lg hover:text-blue-500'>About</button>
                </Link>
                <Link to='/MyDay'>
                    <button className='text-lg hover:text-blue-500'>Event</button>
                </Link>
                <Link to='/Progress'>
                    <button className='text-lg hover:text-blue-500'>Merch</button>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
