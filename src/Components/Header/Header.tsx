import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="flex w-full sm:justify-start relative" >
            <div className="z-10 flex items-center  justify-center md:justify-between mx-1 md:mx-8 w-full py-3">
                <Link className="flex items-center" to="/">
                    <div className="sm:ml-2 lg:ml-20 md:text-left text-center">
                        <h1 className="text-7xl font-semibold text-black text-image text-color-bg">Tech <span className='font-semibold'>Jobs</span></h1>
                        <p className="pt-1 text-xl font-semibold text-color-bg">Remote jobs for software engineer</p>
                    </div>
                </Link>
            </div>
        </nav>
    );
}

//ml-auto mr-10
export default Header;