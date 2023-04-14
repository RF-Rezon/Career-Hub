import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <div className='md:max-w-7xl max-w-full md:mx-auto px-4'>
                <div className='flex items-center justify-between py-5'>
                            <p className='md:text-3xl text-xl font-bold'>Santa Monica</p>
                            <div className='flex items-center justify-between md:space-x-7 space-x-5 mr-3 gg my-4'>
                                <Link to= "/"><p>Home</p></Link>
                                <Link to= "/applied_jobs"><p>Applied Jobs</p></Link>
                                <Link to= "/statistics"><p>Statistics</p></Link>
                                <Link to= "/blog"><p>Blog</p></Link>

                            </div>
                            <button className="md:p-b p-bm">
                                Start Applying
                            </button>
                        </div>
            </div>
        </div>
    );
};

export default Nav;