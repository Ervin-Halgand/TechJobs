import React, { FunctionComponent } from 'react';
import './style.css';

import { Link } from 'react-router-dom';

const Header: FunctionComponent = () => {
    return (
        <nav className="flex w-full sm:justify-start relative" >
            <div className="z-10 flex items-center text-center justify-center w-full py-6">
                <Link className="flex items-center" to="/">
                    <div className="text-center">
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